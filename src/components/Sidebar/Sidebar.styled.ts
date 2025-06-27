import styled from 'styled-components';
import { colors, flexColumn } from '../../common/common.styled';

export const SidebarWrapper = styled.div`
  width: 110px;
  height: 100vh;
  ${flexColumn};
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
`;

export const TopSection = styled.div`
  ${flexColumn};
  align-items: center;
  margin-top: 30px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 30px;
  margin-bottom: 40px;
`;
