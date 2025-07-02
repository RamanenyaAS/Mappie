import { colors, fontWeights } from '@constants/theme';
import { BaseIconStyle, flexGap } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Wrapper = styled.div<{ selected: boolean }>`
  ${flexGap('15px')};
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? colors.darkGrey : colors.black)};
  font-weight: ${fontWeights.medium};

  svg {
    ${BaseIconStyle};
  }
`;
