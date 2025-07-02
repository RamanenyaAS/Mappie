import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import { IconPOIMarker, IconUserLocation } from '@assets/icons';
import CenterButton from '@components/CenterButton/CenterButton';
import {
  DynamicCircleOptions,
  FixedCircleOptions,
  StyledMap,
  StyledMapContainer,
} from '@components/Map/Map.styled';
import {
  DEFAULT_MAP_ZOOM,
  DEFAULT_MARKER_ICON_SIZE,
  FIXED_CIRCLE_RADIUS,
  POI_ICON_SIZE,
  RADIUS_MULTIPLIER,
  USER_ICON_SIZE,
} from '@constants/mapConfig';
import { setUserLocation } from '@slices/userLocationSlice';
import type { RootState } from '@store/store';
import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import {
  Circle,
  Marker,
  Popup,
  TileLayer,
  useMap,
  ZoomControl,
} from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

const DefaultIcon = L.icon({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: DEFAULT_MARKER_ICON_SIZE,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const userLocationIcon = L.icon({
  iconUrl: IconUserLocation,
  iconSize: USER_ICON_SIZE,
  iconAnchor: [10, 7],
  popupAnchor: [0, -7],
});

const poiIcon = L.icon({
  iconUrl: IconPOIMarker,
  iconSize: POI_ICON_SIZE,
  iconAnchor: [9, 18],
  popupAnchor: [0, -20],
});

function RoutingLayer({
  from,
  to,
}: {
  from: [number, number];
  to: { lat: number; lon: number };
}) {
  const map = useMap();
  const controlRef = useRef<L.Routing.Control | null>(null);

  useEffect(() => {
    if (controlRef.current) {
      map.removeControl(controlRef.current);
    }

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to.lat, to.lon)],
      routeWhileDragging: false,
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: () => null,
      show: false,
    });

    controlRef.current = routingControl;
    routingControl.addTo(map);

    const container = routingControl.getContainer();
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }

    return () => {
      if (controlRef.current) {
        map.removeControl(controlRef.current);
      }
    };
  }, [from, to, map]);

  return null;
}

function Map() {
  const dispatch = useDispatch();
  const [position, setPosition] = useState<[number, number] | null>(null);
  const poi = useSelector((state: RootState) => state.poi.items);
  const searchRadius = useSelector(
    (state: RootState) => state.userLocation.radius
  );
  const routeTarget = useSelector((state: RootState) => state.route.target);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
      dispatch(setUserLocation({ lat: latitude, lon: longitude }));
    });
  }, [dispatch]);

  return (
    <StyledMap>
      {position && (
        <StyledMapContainer
          center={position}
          zoom={DEFAULT_MAP_ZOOM}
          zoomControl={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={userLocationIcon} />
          <Circle
            center={position}
            radius={FIXED_CIRCLE_RADIUS}
            pathOptions={FixedCircleOptions}
          />
          {searchRadius && (
            <Circle
              center={position}
              radius={Number(searchRadius) * RADIUS_MULTIPLIER}
              pathOptions={DynamicCircleOptions}
            />
          )}
          {poi.map(
            (item) =>
              item.lat &&
              item.lon && (
                <Marker
                  key={item.id}
                  position={[item.lat, item.lon]}
                  icon={poiIcon}
                >
                  <Popup>{item.name || 'Без названия'}</Popup>
                </Marker>
              )
          )}
          {routeTarget && (
            <Marker
              position={[routeTarget.lat, routeTarget.lon]}
              icon={poiIcon}
            >
              <Popup>Точка назначения</Popup>
            </Marker>
          )}
          {routeTarget && position && (
            <RoutingLayer from={position} to={routeTarget} />
          )}
          <ZoomControl position="bottomright" />
          <CenterButton position={position} />
        </StyledMapContainer>
      )}
    </StyledMap>
  );
}

export default Map;
