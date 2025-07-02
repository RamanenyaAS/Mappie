import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

export const FixedCircleOptions = {
  fillColor: '#5E7BC72A',
  fillOpacity: 1,
  stroke: false,
};

export const DynamicCircleOptions = {
  fillColor: '#5E7BC7',
  fillOpacity: 0.2,
  color: '#5E7BC7',
  weight: 3,
  dashArray: '10 10',
};
