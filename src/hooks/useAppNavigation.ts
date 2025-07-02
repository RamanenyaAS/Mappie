import { useNavigate } from 'react-router-dom';

export function useAppNavigation() {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');
  const goToResetPassword = () => navigate('/reset-password');
  const goToHome = () => navigate('/');
  const goToVerifyEmail = () => navigate('/verify-email');

  return {
    goToLogin,
    goToRegister,
    goToResetPassword,
    goToHome,
    goToVerifyEmail,
  };
}
