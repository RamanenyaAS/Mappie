import styled from 'styled-components';
import { colors } from '../../common/common.styled';

export const Panel = styled.div`
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${colors.white};
  padding: 20px;
  border-right: 1px solid ${colors.lighterBorder};
`;
