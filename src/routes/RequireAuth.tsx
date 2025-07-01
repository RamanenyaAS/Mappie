import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import type { RootState } from '../store/store';

export function RequireAuth({ children }: { children: React.ReactElement }) {
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (!user.email || !user.token || !user.id) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return <Navigate to="/verify-email" replace />;
  }
  return children;
}
