import { auth } from '@firebase';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';

export async function registerWithVerification(
  email: string,
  password: string,
  navigate: (to: string) => void,
  setInfo: (msg: string) => void,
  setError: (msg: string) => void
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user && !userCredential.user.emailVerified) {
      await sendEmailVerification(userCredential.user);
      setInfo('Подтвердите свой Email по ссылке в письме!');
      setError('');
      navigate('/verify-email');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError('Ошибка регистрации: ' + error.message);
    } else {
      setError('Ошибка регистрации: Неизвестная ошибка');
    }
    setInfo('');
  }
}
