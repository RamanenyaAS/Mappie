import styled from 'styled-components';
import { BasePanel, colors } from '../../common/common.styled';

export const Panel = styled(BasePanel)`
  width: 400px;
  border-right: 1px solid ${colors.lighterBorder};

  @media (max-width: 860px) {
    width: 300px;
  }
`;
