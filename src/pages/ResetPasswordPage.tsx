import { useState } from 'react';
import styled from 'styled-components';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

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

const Msg = styled.div`
  font-size: 14px;
  color: #388e3c;
  margin-top: 8px;
`;

const ErrorMsg = styled.div`
  font-size: 14px;
  color: #d32f2f;
  margin-top: 8px;
`;

function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    setError('');
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg('Письмо для сброса пароля отправлено!');
    } catch (e) {
      setError('Ошибка сброса: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleReset}>
      <h2>Сброс пароля</h2>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваш email"
        type="email"
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Отправляем...' : 'Сбросить пароль'}
      </Button>
      {msg && <Msg>{msg}</Msg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Button type="button" onClick={() => navigate('/login')}>
        Назад к входу
      </Button>
    </Form>
  );
}

export default ResetPasswordPage;
