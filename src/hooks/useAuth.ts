import type { User } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '../firebase';
import { removeUser, setUser } from '../slices/userSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            emailVerified: user.emailVerified,
          })
        );
      } else {
        dispatch(removeUser());
      }
      setLoading(false);
    });
    return unsub;
  }, [dispatch]);

  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e: unknown) {
      alert('Ошибка регистрации: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e: unknown) {
      alert('Ошибка входа: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (e: unknown) {
      alert('Ошибка Google входа: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigate('/login');
    } catch (e: unknown) {
      alert('Ошибка выхода: ' + (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    user: firebaseUser,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
    isAuth: !!firebaseUser,
  };
}
