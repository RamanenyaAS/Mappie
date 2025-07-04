import { BasePanel, flexColumn, flexGap } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Panel = styled(BasePanel)`
  width: 400px;

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 860px) {
    width: 300px;
  }
`;

export const CardList = styled.div`
  ${flexColumn};
  ${flexGap('25px')};

  @media (max-width: 860px) {
    ${flexGap('15px')}
  }
`;
