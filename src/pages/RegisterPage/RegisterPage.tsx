import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { isValidEmail, isValidPassword } from '../../utils/validation';
import {
  Button,
  ErrorMsg,
  Form,
  InfoMsg,
  Input,
  Switch,
} from './RegisterPage.styled';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInfo('');
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
      const { registerWithVerification } = await import(
        '../../utils/registerWithVerification'
      );
      await registerWithVerification(
        email,
        password,
        navigate,
        setInfo,
        setError
      );
    } catch (e: unknown) {
      setError((e as Error).message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
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
        autoComplete="new-password"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
      </Button>
      {info && !error && <InfoMsg>{info}</InfoMsg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Switch>
        Уже есть аккаунт?{' '}
        <Button type="button" onClick={() => navigate('/login')}>
          Войти
        </Button>
      </Switch>
    </Form>
  );
}

export default RegisterPage;
