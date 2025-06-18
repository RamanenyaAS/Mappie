import { useMap } from 'react-leaflet';
import IconCenterMap from '../assets/icons/IconCenterMap.svg';
import styled from 'styled-components';
import type { TPosition } from '../types/interfaces';

const StyledCenterButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 50px;
  z-index: 1000;
  background-color: white;
  padding: 3px 3px;
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid #00000033;
`;

function CenterButton({ position }: { position: TPosition }) {
  const map = useMap();
  const handleClick = () => {
    map.setView(position, 13);
  };
  return (
    <StyledCenterButton onClick={handleClick}>
      <img src={IconCenterMap}></img>
    </StyledCenterButton>
  );
}
export default CenterButton;
