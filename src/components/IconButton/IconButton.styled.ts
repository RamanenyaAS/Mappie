import type { IIconButton } from '@appTypes/interfaces';
import { border, borderRadius, colors } from '@constants/theme';
import { BaseButton, BaseIconStyle } from '@styles/BaseStyle';
import styled from 'styled-components';

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

  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
`;
