import ErrorPage from '@pages/ErrorPage/ErrorPage';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage/VerifyEmailPage';
import { RequireAuth } from './routes/RequireAuth';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
