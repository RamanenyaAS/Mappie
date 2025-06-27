import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const StyledMap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
`;

export const FixedCircleOptions = {
  fillColor: '#5E7BC72A',
  fillOpacity: 1,
  stroke: false,
};

export const DynamicCircleOptions = {
  fillColor: '#5E7BC71A',
  fillOpacity: 1,
  color: '#5E7BC733',
  weight: 3,
  dashArray: '10 10',
};
