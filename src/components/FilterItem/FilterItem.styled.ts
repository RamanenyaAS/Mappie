import styled from 'styled-components';
import {
  flexGap,
  fontWeights,
  BaseIconStyle,
  colors,
} from '../../common/common.styled';

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
