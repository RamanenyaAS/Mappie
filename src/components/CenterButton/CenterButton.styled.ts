import styled from 'styled-components';

import { borderRadius, colors } from '../../constants/theme';
import { BaseButton } from '../../styles/BaseStyle';

export const StyledCenterButton = styled(BaseButton)`
  position: absolute;
  bottom: 25px;
  right: 50px;
  z-index: 1000;
  background-color: ${colors.white};
  padding: 3px 3px;
  border-radius: ${borderRadius.large};
  border: 3px solid ${colors.transparentBlackBorder};
`;
