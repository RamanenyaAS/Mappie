import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  width: 350px;
  height: 60px;
  border-radius: 10px;
  background-color: #5e7bc7;
  color: #fff;
  border: none;
  transition: border 0.2s ease;
  margin: 0 25px 36px;

  &:hover {
    border: 3px solid #c4c4c4;
  }

  &:active {
    border: 3px solid #808080;
  }
`;
