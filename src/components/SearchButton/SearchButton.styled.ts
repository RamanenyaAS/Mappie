import styled from 'styled-components';

import { border, borderRadius, colors } from '../../constants/theme';
import { BaseButton } from '../../styles/BaseStyle';

export const Button = styled(BaseButton)`
  width: 87%;
  height: 60px;
  border-radius: ${borderRadius.large};
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  border: ${border.none};
  margin: 0 25px 36px;

  &:hover {
    border: ${border.default};
  }

  &:active {
    border: 3px solid ${colors.mediumGrey};
  }

  @media (max-width: 860px) {
  }
`;
