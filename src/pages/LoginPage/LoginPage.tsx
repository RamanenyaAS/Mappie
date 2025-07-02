import { useAppNavigation } from '@hooks/useAppNavigation';
import { useAuth } from '@hooks/useAuth';
import { useInput } from '@hooks/useInput';
import { getFriendlyErrorMessage } from '@utils/getFriendlyErrorMessage';
import { isValidEmail, isValidPassword } from '@utils/validation';
import { useState } from 'react';

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
  const email = useInput('');
  const password = useInput('');
  const [error, setError] = useState('');
  const { goToRegister, goToResetPassword } = useAppNavigation();
  const { login, loginWithGoogle, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email.value)) {
      setError('Введите корректный email.');
      return;
    }

    if (!isValidPassword(password.value)) {
      setError(
        'Пароль должен быть минимум 8 символов, содержать хотя бы одну заглавную букву, одну строчную, цифру и специальный символ.'
      );
      return;
    }

    try {
      await login(email.value, password.value);
    } catch (e) {
      setError(getFriendlyErrorMessage((e as Error).message));
    }
  };

  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (e) {
      setError(getFriendlyErrorMessage((e as Error).message));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <Input
        value={email.value}
        onChange={email.onChange}
        placeholder="Email"
        type="email"
        autoComplete="email"
      />
      <Input
        value={password.value}
        onChange={password.onChange}
        placeholder="Пароль"
        type="password"
        autoComplete="current-password"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Входим...' : 'Войти'}
      </Button>
      <GoogleButton type="button" onClick={handleGoogle} disabled={loading}>
        Войти с Google
      </GoogleButton>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <ForgotPassword onClick={goToResetPassword}>
        Забыли пароль?
      </ForgotPassword>
      <Switch>
        Нет аккаунта?{' '}
        <Button type="button" onClick={goToRegister}>
          Зарегистрироваться
        </Button>
      </Switch>
    </Form>
  );
}

export default LoginPage;
