import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { RequireAuth } from './routes/RequireAuth';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import { useAuth } from './hooks/useAuth';
import Loader from './components/Loader/Loader';
import VerifyEmailPage from './pages/VerifyEmailPage/VerifyEmailPage';

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
    </Routes>
  );
}

export default App;
