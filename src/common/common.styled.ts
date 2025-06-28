import styled, { css } from 'styled-components';

export const colors = {
  primaryBlue: '#5E7BC7',
  accentRed: '#C75E5E',
  darkGrey: '#373737',
  mediumGrey: '#808080',
  lightGreyBorder: '#C4C4C4',
  white: '#FFFFFF',
  black: '#000000',
  blackShadow: '#0000001a',
  errorRed: '#FF0000',
  darkText: '#333',
  lightBorder: '#ccc',
  googleRed: '#FA4747',
  googleBorder: '#DADCE0',
  monoRed: '#C75E5E',
  primaryBlueAlpha: 'rgba(94, 123, 199, 0.5)',
  darkShadowAlpha: '#0000003d',
  lighterBorder: '#ddd',
  transparentBlackBorder: '#00000033',
};

export const fontFamilies = {
  primary: 'Mont, sans-serif',
  monospace: 'monospace',
};

export const fontWeights = {
  extraBold: 800,
  bold: 700,
  medium: 600,
  regular: 400,
};

export const borderRadius = {
  large: '10px',
  medium: '6px',
  small: '5px',
};

export const border = {
  default: `3px solid ${colors.lightGreyBorder}`,
  none: 'none',
  input: `1px solid ${colors.lightBorder}`,
};

export const shadows = {
  default: `1px 0px 20px 0px ${colors.blackShadow}`,
  form: `1px 0px 30px 0px ${colors.darkShadowAlpha}`,
};

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
  }
`;

export const PanelContentWrapper = styled.div`
  width: 100%;
  padding: 0px 25px;
  overflow-y: auto;
  ${hideScrollbar};
  ${flexGap('25px')};
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: ${fontWeights.extraBold};
  font-size: 20px;
`;
