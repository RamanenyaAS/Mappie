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

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-family: Mont, sans-serif;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #5e7bc7;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  font-family: Mont, sans-serif;
`;

export const Msg = styled.div`
  font-size: 14px;
  color: #388e3c;
  margin-top: 8px;
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: #d32f2f;
  margin-top: 8px;
`;
