import styled from 'styled-components';
import { IconFavorite } from '../../assets/icons';
import {
  colors,
  borderRadius,
  flexColumn,
  flexGap,
  fontWeights,
  BaseIconStyle,
  border,
} from '../../common/common.styled';

export const Card = styled.div`
  padding: 20px;
  border: ${border.default};
  border-radius: ${borderRadius.large};
  ${flexColumn};
  cursor: pointer;
`;

export const CardTop = styled.div`
  ${flexGap('15px')};
`;

export const CardImage = styled.img`
  width: 120px;
  height: 99px;
  border-radius: ${borderRadius.large};
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-weight: ${fontWeights.extraBold};
  font-size: 16px;
  flex: 1;
`;

export const CardText = styled.div`
  font-size: 10px;
  font-weight: ${fontWeights.medium};
  margin-top: 10px;
  color: ${colors.darkGrey};
  max-height: 3.6em;
  overflow: hidden;
  line-height: 1.2em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const IconStyled = styled(IconFavorite)<{ $active: boolean }>`
  ${BaseIconStyle};
  width: 20px;
  height: 20px;
  color: ${({ $active }) => ($active ? colors.accentRed : colors.mediumGrey)};
  cursor: pointer;
`;
