import { colors } from '@constants/theme';
import { BasePanel } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Panel = styled(BasePanel)`
  width: 400px;
  border-right: 1px solid ${colors.lighterBorder};

  @media (max-width: 860px) {
    width: 300px;
  }
`;
