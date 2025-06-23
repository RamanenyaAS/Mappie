export const isValidEmail = (email: string): boolean => {
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegExp.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|\\:;"'<>,.?/~`]).{8,}$/;
  return passwordRegExp.test(password);
};
