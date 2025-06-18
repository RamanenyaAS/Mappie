export function getFriendlyErrorMessage(error: unknown): string {
  const message = (error as Error)?.message || '';

  const codeMatch = message.match(/auth\/[a-z-]+/i);
  const code = codeMatch ? codeMatch[0].toLowerCase() : '';

  switch (code) {
    case 'auth/user-not-found':
      return 'Пользователь с таким email не найден.';
    case 'auth/wrong-password':
      return 'Неверный пароль. Попробуйте снова.';
    case 'auth/invalid-email':
      return 'Некорректный email.';
    case 'auth/too-many-requests':
      return 'Слишком много попыток. Попробуйте позже.';
    case 'auth/popup-closed-by-user':
      return 'Вы закрыли окно входа через Google.';
    case 'auth/network-request-failed':
      return 'Проблемы с интернет-соединением.';
    case 'auth/invalid-credential':
      return 'Неверный логин или пароль.';
    default:
      return 'Произошла неизвестная ошибка. Попробуйте позже.';
  }
}
// исправить. как минимум при неверном порозе срабатывает дефолт
