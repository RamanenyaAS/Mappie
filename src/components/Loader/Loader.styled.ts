import styled, { keyframes } from 'styled-components';
import {
  centerContent,
  fontWeights,
  fontFamilies,
} from '../../common/common.styled';

export const loadingAnim = keyframes`
  to {
    clip-path: inset(0 -1ch 0 0);
  }
`;

export const LoaderContainer = styled.div`
  ${centerContent};
  height: 100vh;
`;

export const LoaderWrapper = styled.div`
  width: fit-content;
  font-weight: ${fontWeights.bold};
  font-family: ${fontFamilies.monospace};
  font-size: 30px;
  clip-path: inset(0 3ch 0 0);
  animation: ${loadingAnim} 1s steps(4) infinite;

  &::before {
    content: 'Loading...';
  }
`;
