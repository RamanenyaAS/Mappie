import styled, { css } from 'styled-components';

import {
  border,
  borderRadius,
  colors,
  fontFamilies,
  fontWeights,
  shadows,
} from '../constants/theme';

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const flexGap = (gapValue: string) => css`
  display: flex;
  gap: ${gapValue};
`;

export const hideScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BaseIconStyle = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const BaseButton = styled.button`
  ${centerContent};
  padding: 10px 20px;
  border-radius: ${borderRadius.medium};
  font-family: ${fontFamilies.primary};
  font-weight: ${fontWeights.bold};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`;

export const BaseInput = styled.input`
  padding: 10px;
  border-radius: ${borderRadius.large};
  border: ${border.input};
  font-family: ${fontFamilies.primary};
  outline: none;
`;

export const BasePanel = styled.div`
  ${flexColumn};
  box-shadow: ${shadows.default};
  position: relative;
  background: ${colors.white};
  height: 100vh;
  border-left: ${border.default};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -45px;
    transform: translateY(-50%);
    width: 45px;
    height: 80px;
    background-color: ${colors.white};
    border-top-right-radius: ${borderRadius.large};
    border-bottom-right-radius: ${borderRadius.large};
    z-index: 1000;

    @media (max-width: 860px) {
      width: 35px;
      height: 70px;
      right: -35px;
    }
  }
`;

export const PanelContentWrapper = styled.div`
  width: 100%;
  padding: 0px 25px;
  overflow-y: auto;
  ${hideScrollbar};
  ${flexGap('25px')};
  flex-direction: column;

  @media (max-width: 860px) {
    padding: 0px 10px;
  }
`;

export const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: ${fontWeights.extraBold};
  font-size: 20px;

  @media (max-width: 860px) {
    padding: 5px 0px 5px 20px;
  }
`;
