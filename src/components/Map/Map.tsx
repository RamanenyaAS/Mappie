import { TileLayer, Marker, ZoomControl, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation } from '../../slices/userLocationSlice';
import type { RootState } from '../../store/store';
import CenterButton from '../CenterButton/CenterButton';
import {
  StyledMap,
  StyledMapContainer,
  FixedCircleOptions,
  DynamicCircleOptions,
} from './Map.styled';
import { IconUserLocation } from '../../assets/icons';

const DefaultIcon = L.icon({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const userLocationIcon = L.icon({
  iconUrl: IconUserLocation,
  iconSize: [20, 14],
  iconAnchor: [10, 7], // Изменено для центрирования иконки
  popupAnchor: [0, -7], // Скорректировано относительно нового iconAnchor
});

function Map() {
  const dispatch = useDispatch();
  const [position, setPosition] = useState<[number, number] | null>(null);
  const poi = useSelector((state: RootState) => state.poi.items);
  const searchRadius = useSelector(
    (state: RootState) => state.userLocation.radius
  );

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
        <StyledMapContainer center={position} zoom={16} zoomControl={false}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={userLocationIcon} />

          <Circle
            center={position}
            radius={98} // Радиус оставлен 98 метров, как вы просили
            pathOptions={FixedCircleOptions}
          />

          {searchRadius && (
            <Circle
              center={position}
              radius={Number(searchRadius) * 1000}
              pathOptions={DynamicCircleOptions}
            />
          )}

          {poi.map(
            (item) =>
              item.lat &&
              item.lon && (
                <Marker key={item.id} position={[item.lat, item.lon]}>
                  <Popup>
                    {item.name || 'Без названия'}
                    <br />
                    Категория: {item.category}
                  </Popup>
                </Marker>
              )
          )}
          <ZoomControl position="bottomright" />
          <CenterButton position={position} />
        </StyledMapContainer>
      )}
    </StyledMap>
  );
}

export default Map;
