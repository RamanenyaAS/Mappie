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
