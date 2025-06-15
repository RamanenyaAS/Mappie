import styled from 'styled-components';
import type { IIconButton } from '../types/interfaces';
import IconSearch from '../assets/icons/IconSearch.svg?react';
import IconFavorite from '../assets/icons/IconFavorite.svg?react';
import IconLogin from '../assets/icons/IconLogin.svg?react';

// Цвета по типу кнопки
const buttonColors: Record<IIconButton['type'], string> = {
  Search: '#5E7BC7',
  Favorite: '#C75E5E',
  Login: '#808080',
};

// Карта иконок
const icons: Record<
  IIconButton['type'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  Search: IconSearch,
  Favorite: IconFavorite,
  Login: IconLogin,
};

const StyledButton = styled.button<{
  $variant: IIconButton['type'];
  $active: boolean;
}>`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $active }) => ($active ? '3px solid #C4C4C4' : 'none')};
  background-color: ${({ $variant, $active }) =>
    $active ? 'transparent' : buttonColors[$variant]};
  transition: all 0.2s ease;
  margin-top: ${({ $variant }) => ($variant === 'Favorite' ? '15px' : '0')};
  margin-bottom: ${({ $variant }) => ($variant === 'Login' ? '35px' : '0')};

  &:hover {
    border: 3px solid #c4c4c4;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ $variant, $active }) =>
      $active ? buttonColors[$variant] : '#fff'};
    transition: color 0.2s ease;
  }
`;

const IconButton = ({ type, isActive = false, onClick }: IIconButton) => {
  const Icon = icons[type];

  return (
    <StyledButton $variant={type} $active={isActive} onClick={onClick}>
      <Icon />
    </StyledButton>
  );
};

export default IconButton;
