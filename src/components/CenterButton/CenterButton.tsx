import type { TPosition } from '@appTypes/interfaces';
import { IconCenterMap } from '@assets/icons';
import { DEFAULT_MAP_ZOOM } from '@constants/mapConfig';
import { useMap } from 'react-leaflet';

import { StyledCenterButton } from './CenterButton.styled';

function CenterButton({ position }: { position: TPosition }) {
  const map = useMap();
  const handleClick = () => {
    map.setView(position, DEFAULT_MAP_ZOOM);
  };
  return (
    <StyledCenterButton onClick={handleClick}>
      <img
        src={IconCenterMap}
        alt="Center Map"
        title="Нажмите для центрирования карты"
      />
    </StyledCenterButton>
  );
}

export default CenterButton;
