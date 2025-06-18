import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

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

const Switch = styled.div`
  text-align: center;
  margin-top: 8px;
`;

const InfoMsg = styled.div`
  color: #388e3c;
  font-size: 14px;
  margin-top: 8px;
`;

const ErrorMsg = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;

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
    try {
      const { registerWithVerification } = await import(
        '../utils/registerWithVerification'
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
        required
        autoComplete="email"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Пароль"
        required
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
