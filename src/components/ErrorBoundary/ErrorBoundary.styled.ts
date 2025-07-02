import { colors, fontFamilies, fontWeights } from '@constants/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: ${fontWeights.extraBold};
  color: ${colors.errorRed};
  margin-bottom: 10px;
`;

export const Message = styled.p`
  font-size: 20px;
  color: ${colors.darkText};
  font-weight: ${fontWeights.medium};
`;

export const Details = styled.details`
  margin-top: 10px;
  white-space: pre-wrap;
  color: ${colors.monoRed};
  font-family: ${fontFamilies.monospace};
  font-size: 14px;
  font-weight: ${fontWeights.regular};
`;
