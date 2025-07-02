import { auth } from '@firebase';
import type { RootState } from '@store/store';
import { sendEmailVerification } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';

import {
  Button,
  ButtonBlock,
  ErrorMsg,
  Info,
  Text,
  Title,
} from './VerifyEmailPage.styled';

const VerifyEmailPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [canResend, setCanResend] = useState(true);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!canResend && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [canResend, timer]);

  const handleResend = async () => {
    setMessage('');
    setError('');
    setLoading(true);

    const currentUser = auth.currentUser;
    if (!currentUser) {
      setError('Войдите в аккаунт, чтобы подтвердить почту.');
      setLoading(false);
      return;
    }
    if (currentUser.emailVerified) {
      setError('Почта уже подтверждена.');
      setLoading(false);
      return;
    }
    if (!canResend) {
      setError('Письмо уже отправлено. Подождите немного.');
      setLoading(false);
      return;
    }
    try {
      await sendEmailVerification(currentUser);
      setMessage('Письмо отправлено повторно!');
      setCanResend(false);
      setTimer(60);
    } catch (e) {
      setError('Ошибка: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const currentUser = auth.currentUser;

  return (
    <Form>
      <Title>Подтвердите ваш Email</Title>
      {!currentUser ? (
        <>
          <ErrorMsg>Войдите в аккаунт, чтобы подтвердить почту.</ErrorMsg>
          <Button type="button" onClick={() => navigate('/login')}>
            Войти
          </Button>
        </>
      ) : (
        <>
          <Text>
            Мы отправили письмо на <strong>{user.email}</strong>. Пожалуйста,
            перейдите по ссылке внутри письма для подтверждения.
          </Text>
          <Text>
            Если письмо не пришло, проверьте папку «Спам» или нажмите на кнопку
            ниже.
          </Text>
          <ButtonBlock>
            <Button
              type="button"
              onClick={handleResend}
              disabled={loading || !canResend}
            >
              {loading
                ? 'Отправляем...'
                : `Отправить повторно${!canResend && timer > 0 ? ` (${timer} сек)` : ''}`}
            </Button>
            <Button type="button" onClick={() => navigate('/login')}>
              На главную
            </Button>
          </ButtonBlock>
          {message && <Info>{message}</Info>}
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </>
      )}
    </Form>
  );
};

export default VerifyEmailPage;
