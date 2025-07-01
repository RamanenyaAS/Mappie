import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { isValidEmail } from '../../utils/validation';
import { Button, ErrorMsg, Form, Input, Msg } from './ResetPasswordPage.styled';

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

    if (!isValidEmail(email)) {
      setError('Введите корректный email.');
      return;
    }

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
        autoComplete="email"
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
