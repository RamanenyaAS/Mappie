import { IconSearch, IconFavorite, IconLogout } from '../../assets/icons';
import { StyledButton } from './IconButton.styled';
import type { IIconButton } from '../../types/interfaces';

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
