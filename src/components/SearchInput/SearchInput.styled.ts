import { IconSearch } from '@assets/icons';
import { border, colors, fontWeights } from '@constants/theme';
import { BaseIconStyle, BaseInput } from '@styles/BaseStyle';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  padding: 25px;
`;

export const Input = styled(BaseInput)`
  width: 100%;
  padding: 19px 72px;
  font-size: 16px;
  font-weight: ${fontWeights.medium};
  color: ${colors.darkGrey};
  border: ${border.default};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px ${colors.primaryBlueAlpha};

    @media (max-width: 400px) {
      width: 90%;
      padding: 10px 50px;
    }
  }
`;

export const SearchIcon = styled(IconSearch)`
  ${BaseIconStyle};
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 55px;
  transform: translateY(-50%);
  color: ${colors.darkGrey};
  pointer-events: none;
`;
