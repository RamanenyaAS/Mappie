import styled from 'styled-components';
import type { IIconButton } from '../../types/interfaces';
import {
  colors,
  borderRadius,
  BaseButton,
  BaseIconStyle,
  border,
} from '../../common/common.styled';

export const buttonColors: Record<IIconButton['type'], string> = {
  Search: colors.primaryBlue,
  Favorite: colors.accentRed,
  Logout: colors.mediumGrey,
};

export const StyledButton = styled(BaseButton)<{
  $variant: IIconButton['type'];
  $active: boolean;
}>`
  width: 60px;
  height: 60px;
  border-radius: ${borderRadius.medium};
  border: ${({ $active }) => ($active ? border.default : border.none)};
  background-color: ${({ $variant, $active }) =>
    $active ? 'transparent' : buttonColors[$variant]};
  margin-top: ${({ $variant }) => ($variant === 'Favorite' ? '15px' : '0')};
  margin-bottom: ${({ $variant }) => ($variant === 'Logout' ? '35px' : '0')};

  &:hover {
    border: ${border.default};
  }

  svg {
    ${BaseIconStyle};
    color: ${({ $variant, $active }) =>
      $active ? buttonColors[$variant] : colors.white};
    transition: color 0.2s ease;
  }
`;
