import styled from 'styled-components';
import { BasePanel, flexColumn, flexGap } from '../../common/common.styled';

export const Panel = styled(BasePanel)`
  width: 400px;
`;

export const CardList = styled.div`
  ${flexColumn};
  ${flexGap('25px')};
`;
