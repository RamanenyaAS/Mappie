import { BaseButton, CenteredContainer } from '@styles/BaseStyle';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPageWrapper = styled(CenteredContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ErrorPageImage = styled.img`
  max-width: 35%;
  max-height: 350px;
`;

export const GoHomeLink = styled(Link)`
  text-decoration: none;
`;

export const GoHomeButton = styled(BaseButton)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004080;
  }
`;
