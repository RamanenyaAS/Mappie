import { IconFavorite } from '@assets/icons';
import { border, borderRadius, colors, fontWeights } from '@constants/theme';
import { BaseIconStyle, flexColumn, flexGap } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Card = styled.div`
  padding: 20px;
  border: ${border.default};
  border-radius: ${borderRadius.large};
  ${flexColumn};
  cursor: pointer;

  &:last-child {
    margin-bottom: 15px;
  }
`;

export const CardTop = styled.div`
  display: flex;
  ${flexGap('15px')};

  @media (max-width: 860px) {
    ${flexGap('5px')};
  }

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  width: 45%;
  height: 99px;
  border-radius: ${borderRadius.large};
  object-fit: cover;

  @media (max-width: 400px) {
    width: 90%;
  }
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
  margin-top: 20px;
`;

export const IconStyled = styled(IconFavorite)<{ $active: boolean }>`
  ${BaseIconStyle};
  width: 20px;
  height: 20px;
  color: ${({ $active }) => ($active ? colors.accentRed : colors.mediumGrey)};
  cursor: pointer;
`;

export const Placeholder = styled.div`
  width: 120px;
  height: 99px;
  background-color: #f0f0f0;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 12px;
  object-fit: cover;
`;
