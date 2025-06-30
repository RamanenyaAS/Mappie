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

export const GoogleButton = styled(Button)`
  color: white;
  background-color: #fa4747;
  border: 1px solid #dadce0;
`;

export const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  text-align: center;

  @media (max-width: 300px) {
    flex-direction: column;
  }
`;

export const ForgotPassword = styled.span`
  color: #888;
  font-size: 13px;
  font-weight: 400;
  text-align: right;
  margin-top: -8px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: #d32f2f;
  margin-top: 8px;
`;
