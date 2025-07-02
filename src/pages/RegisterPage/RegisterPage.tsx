import { useAppNavigation } from '@hooks/useAppNavigation';
import { useInput } from '@hooks/useInput';
import { isValidEmail, isValidPassword } from '@utils/validation';
import { useState } from 'react';

import {
  Button,
  ErrorMsg,
  Form,
  InfoMsg,
  Input,
  Switch,
} from './RegisterPage.styled';

function RegisterPage() {
  const email = useInput('');
  const password = useInput('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const { goToVerifyEmail, goToLogin } = useAppNavigation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInfo('');
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

    setLoading(true);
    try {
      const { registerWithVerification } = await import(
        '@utils/registerWithVerification'
      );
      await registerWithVerification(
        email.value,
        password.value,
        goToVerifyEmail,
        setInfo,
        setError
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
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
        type="password"
        placeholder="Пароль"
        autoComplete="new-password"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
      </Button>
      {info && !error && <InfoMsg>{info}</InfoMsg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Switch>
        Уже есть аккаунт?{' '}
        <Button type="button" onClick={goToLogin}>
          Войти
        </Button>
      </Switch>
    </Form>
  );
}

export default RegisterPage;
