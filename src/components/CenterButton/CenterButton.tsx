import { useMap } from 'react-leaflet';

import { IconCenterMap } from '../../assets/icons';
import type { TPosition } from '../../types/interfaces';
import { StyledCenterButton } from './CenterButton.styled';

function CenterButton({ position }: { position: TPosition }) {
  const map = useMap();
  const handleClick = () => {
    map.setView(position, 16);
  };
  return (
    <StyledCenterButton onClick={handleClick}>
      <img src={IconCenterMap}></img>
    </StyledCenterButton>
  );
}

export default CenterButton;
