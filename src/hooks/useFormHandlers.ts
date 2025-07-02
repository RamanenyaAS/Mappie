import { useCallback } from 'react';
import type { NavigateFunction } from 'react-router-dom';

export const useInputChangeHandler = (setter: (value: string) => void) =>
  useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    },
    [setter]
  );

export const useNavigationHandler = (
  navigate: NavigateFunction,
  path: string
) =>
  useCallback(() => {
    navigate(path);
  }, [navigate, path]);
