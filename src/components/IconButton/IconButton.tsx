import type { IIconButton } from '@appTypes/interfaces';
import { IconFavorite, IconLogout, IconSearch } from '@assets/icons';

import { StyledButton } from './IconButton.styled';

const icons: Record<
  IIconButton['type'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  Search: IconSearch,
  Favorite: IconFavorite,
  Logout: IconLogout,
};

const IconButton = ({ type, isActive = false, onClick }: IIconButton) => {
  const Icon = icons[type];

  return (
    <StyledButton $variant={type} $active={isActive} onClick={onClick}>
      <Icon />
    </StyledButton>
  );
};

export default IconButton;
