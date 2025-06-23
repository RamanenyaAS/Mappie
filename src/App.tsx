import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { RequireAuth } from './components/RequireAuth';
import ResetPasswordPage from './pages/ResetPasswordPage';
import { useAuth } from './hooks/useAuth';
import Loader from './components/Loader';
import VerifyEmailPage from './pages/VerifyEmailPage';

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
