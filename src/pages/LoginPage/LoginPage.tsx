import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getFriendlyErrorMessage } from '../../utils/getFriendlyErrorMessage';
import { isValidEmail, isValidPassword } from '../../utils/validation';
import {
  Button,
  ErrorMsg,
  ForgotPassword,
  Form,
  GoogleButton,
  Input,
  Switch,
} from './LoginPage.styled';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, loginWithGoogle, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Введите корректный email.');
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        'Пароль должен быть минимум 8 символов, содержать хотя бы одну заглавную букву, одну строчную, цифру и специальный символ.'
      );
      return;
    }

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
        autoComplete="email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
        autoComplete="current-password"
      />
      <ForgotPassword onClick={() => navigate('/reset-password')}>
        Забыли пароль?
      </ForgotPassword>
      {error && <ErrorMsg>{error}</ErrorMsg>}
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
