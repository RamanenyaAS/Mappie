import styled from 'styled-components';
import {
  colors,
  borderRadius,
  fontWeights,
  BaseButton,
  BasePanel,
  PanelContentWrapper,
  border,
} from '../../common/common.styled';
import type { IFavoriteButtonProps } from '../../types/interfaces';

export const Panel = styled(BasePanel)`
  width: 490px;
`;

export const PlaceImage = styled.img`
  width: 400px;
  height: 300px;
  border-radius: ${borderRadius.large};
  object-fit: cover;
`;

export const PlaceTitle = styled.h2`
  font-size: 24px;
  color: ${colors.darkGrey};
  font-weight: ${fontWeights.extraBold};
  margin: 20px 0 10px;
`;

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: ${colors.darkGrey};
  margin-bottom: 20px;
`;

export const Address = styled.p`
  font-size: 13px;
  font-weight: ${fontWeights.medium};
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  svg {
    width: 15px;
    height: 20px;
  }
`;

export const FavoriteButton = styled(BaseButton).withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<IFavoriteButtonProps>`
  background-color: ${({ active }) =>
    active ? colors.accentRed : colors.lightGreyBorder};
  color: ${colors.white};
  border-radius: ${borderRadius.large};

  &:hover {
    background-color: ${({ active }) =>
      active ? colors.monoRed : colors.mediumGrey};
  }
`;

export const RouteButton = styled(BaseButton)`
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  border-radius: ${borderRadius.large};

  &:hover {
    background-color: ${colors.primaryBlueAlpha};
  }
`;

export const PlaceWrapper = styled(PanelContentWrapper)`
  width: 440px;
  border: ${border.default};
  margin: 0px 25px;
  padding: 20px;
  border-radius: ${borderRadius.large};
`;

export const Placeholder = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f0f0f0;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: ${borderRadius.large};
`;
