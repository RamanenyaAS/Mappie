import styled from 'styled-components';

export const Form = styled.form`
  max-width: 350px;
  margin: 100px auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 0px 30px 0px #0000003d;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  border: 2px solid transparent;
  background: #5e7bc7;
  color: #fff;
  font-weight: 600;
  font-family: Mont, sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    border-color: #c4c4c4;
  }

  &:active {
    border-color: #808080;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
  color: #2c3e50;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const ButtonBlock = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Info = styled.div`
  color: #388e3c;
  font-size: 14px;
  margin-top: 8px;
`;

export const ErrorMsg = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;
