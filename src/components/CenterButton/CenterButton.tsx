import { useMap } from 'react-leaflet';
import type { TPosition } from '../../types/interfaces';
import { StyledCenterButton } from './CenterButton.styled';
import { IconCenterMap } from '../../assets/icons';

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
