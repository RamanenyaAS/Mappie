import styled from 'styled-components';
import type { IIconButton } from '../../types/interfaces';

export const buttonColors: Record<IIconButton['type'], string> = {
  Search: '#5E7BC7',
  Favorite: '#C75E5E',
  Logout: '#808080',
};

export const StyledButton = styled.button<{
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
  margin-bottom: ${({ $variant }) => ($variant === 'Logout' ? '35px' : '0')};

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
