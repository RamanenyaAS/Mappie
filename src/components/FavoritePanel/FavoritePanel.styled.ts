import styled from 'styled-components';
import {
  BasePanel,
  hideScrollbar,
  fontWeights,
  flexColumn,
  flexGap,
  colors,
  borderRadius,
} from '../../common/common.styled';

export const Panel = styled(BasePanel)`
  width: 400px;
  overflow-y: auto;
  ${hideScrollbar};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 510px;
    transform: translateY(-50%);
    width: 45px;
    height: 80px;
    background-color: ${colors.white};
    border-top-right-radius: ${borderRadius.large};
    border-bottom-right-radius: ${borderRadius.large};
    z-index: 1000;
  }
`;

export const Title = styled.div`
  padding: 5px 0px 15px 30px;
  font-weight: ${fontWeights.extraBold};
  font-size: 20px;
`;

export const CardList = styled.div`
  ${flexColumn};
  padding: 0px 25px;
  ${flexGap('25px')};
`;
