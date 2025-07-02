import { auth } from '@firebase';
import { useAppNavigation } from '@hooks/useAppNavigation';
import { useInput } from '@hooks/useInput';
import { isValidEmail } from '@utils/validation';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';

import { Button, ErrorMsg, Form, Input, Msg } from './ResetPasswordPage.styled';

function ResetPasswordPage() {
  const email = useInput('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { goToLogin } = useAppNavigation();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    setError('');

    if (!isValidEmail(email.value)) {
      setError('Введите корректный email.');
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.value);
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
        value={email.value}
        onChange={email.onChange}
        placeholder="Ваш email"
        type="email"
        autoComplete="email"
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Отправляем...' : 'Сбросить пароль'}
      </Button>
      {msg && <Msg>{msg}</Msg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Button type="button" onClick={goToLogin}>
        Назад к входу
      </Button>
    </Form>
  );
}

export default ResetPasswordPage;
