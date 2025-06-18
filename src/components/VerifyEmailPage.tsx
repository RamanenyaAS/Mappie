import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store/store';
import { auth } from '../firebase';
import { sendEmailVerification } from 'firebase/auth';

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

const Button = styled.button`
  padding: 5px;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  border: 2px solid transparent;
  background: #5e7bc7;
  color: #fff;
  font-weight: 600;
  font-family: Mont, sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    border-color: #c4c4c4;
  }

  &:active {
    border-color: #808080;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
  color: #2c3e50;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const ButtonBlock = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Info = styled.div`
  color: #388e3c;
  font-size: 14px;
  margin-top: 8px;
`;

const ErrorMsg = styled.div`
  color: #d32f2f;
  font-size: 14px;
  margin-top: 8px;
`;

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
