import styled from 'styled-components';
import {
  colors,
  borderRadius,
  fontWeights,
  flexGap,
  BaseButton,
  BasePanel,
  border,
} from '../../common/common.styled';

export const Panel = styled(BasePanel)`
  width: 490px;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

export const PlaceImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: ${borderRadius.large};
  object-fit: cover;
`;

export const PlaceTitle = styled.h2`
  font-size: 24px;
  font-weight: ${fontWeights.extraBold};
  margin: 20px 0 10px;
`;

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: ${colors.darkText};
  margin-bottom: 20px;
`;

export const Address = styled.p`
  font-size: 13px;
  font-weight: ${fontWeights.medium};
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  ${flexGap('15px')};
`;

export const FavoriteButton = styled(BaseButton)<{ active: boolean }>`
  border-radius: ${borderRadius.small};
  font-size: 14px;
  gap: 8px;

  border: ${border.default};
  background-color: ${colors.white};
  color: ${({ active }) => (active ? colors.accentRed : colors.mediumGrey)};

  svg {
    color: currentColor;
  }
`;

export const RouteButton = styled(BaseButton)`
  border-radius: ${borderRadius.small};
  font-size: 14px;
  gap: 8px;

  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  border: ${border.none};
`;
