import styled from 'styled-components';
import {
  BaseButton,
  colors,
  borderRadius,
  border,
} from '../../common/common.styled';

export const Button = styled(BaseButton)`
  width: 350px;
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
`;
