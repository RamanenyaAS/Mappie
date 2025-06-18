import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getFriendlyErrorMessage } from '../utils/getFriendlyErrorMessage';

const Form = styled.form`
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

const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-family: Mont, sans-serif;
  outline: none;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  background: #5e7bc7;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  font-family: Mont, sans-serif;
`;

const GoogleButton = styled(Button)`
  color: white;
  background-color: #fa4747;
  border: 1px solid #dadce0;
`;

const Switch = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  text-align: center;
`;

const ForgotPassword = styled.span`
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

const ErrorMsg = styled.div`
  font-size: 14px;
  color: #d32f2f;
  margin-top: 8px;
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, loginWithGoogle, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (e: unknown) {
      setError(getFriendlyErrorMessage((e as Error).message));
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (e: unknown) {
      setError(getFriendlyErrorMessage((e as Error).message));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
        autoComplete="email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
        required
        autoComplete="current-password"
      />
      <ForgotPassword onClick={() => navigate('/reset-password')}>
        Забыли пароль?
      </ForgotPassword>
      {error && <ErrorMsg>{getFriendlyErrorMessage(error)}</ErrorMsg>}

      <Button type="submit" disabled={loading}>
        {loading ? 'Входим...' : 'Войти'}
      </Button>
      <GoogleButton type="button" onClick={handleGoogle} disabled={loading}>
        Войти через Google
      </GoogleButton>
      <Switch>
        Нет аккаунта?{' '}
        <Button type="button" onClick={() => navigate('/register')}>
          Зарегистрируйтесь
        </Button>
      </Switch>
    </Form>
  );
}

export default LoginPage;
