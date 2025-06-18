import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import IconUserLocation from '../assets/icons/IconUserLocation.svg';
import CenterButton from './CenterButton';
import type { TPosition } from '../types/interfaces';

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
  iconSize: [32, 24],
  iconAnchor: [16, 24],
  popupAnchor: [0, -24],
});

const StyledMap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

function Map() {
  const [position, setPosition] = useState<TPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  return (
    <StyledMap>
      {position && (
        <StyledMapContainer center={position} zoom={13} zoomControl={false}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={userLocationIcon} />
          <ZoomControl position="bottomright" />
          <CenterButton position={position} />
        </StyledMapContainer>
      )}
    </StyledMap>
  );
}

export default Map;
