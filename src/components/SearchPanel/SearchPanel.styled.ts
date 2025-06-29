import styled from 'styled-components';
import {
  borderRadius,
  flexColumn,
  fontWeights,
  flexGap,
  BasePanel,
  BaseInput,
  border,
} from '../../common/common.styled';

export const Panel = styled(BasePanel)`
  width: 400px;
  height: 100vh;
  justify-content: space-between;
`;

export const TopSection = styled.div`
  ${flexColumn};
`;

export const FilterBlock = styled.div`
  width: 350px;
  height: 467px;
  border-radius: ${borderRadius.large};
  border: ${border.default};
  padding: 20px 60px 20px 20px;
  overflow-y: auto;
  margin-left: 25px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #00000080;
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: #00000080 transparent;
`;

export const DistanceBlock = styled.div`
  ${flexGap('20px')};
  align-items: center;
  padding: 15px 25px;
`;

export const RadiusInput = styled(BaseInput)`
  width: 100px;
  height: 50px;
  border-radius: ${borderRadius.large};
  border: ${border.default};
  padding-left: 30px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
`;

export const RadiusInputText = styled.div`
  font-weight: ${fontWeights.extraBold};
  font-size: 16px;
`;
