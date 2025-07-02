import ErrorImage from '@assets/ErrorImage.svg';
import { Title } from '@styles/BaseStyle';

import {
  ErrorPageImage,
  ErrorPageWrapper,
  GoHomeButton,
  GoHomeLink,
} from './ErrorPage.styled';

function ErrorPage() {
  return (
    <>
      <ErrorPageWrapper>
        <ErrorPageImage
          src={ErrorImage}
          alt="Page not found"
          title="Извините, эта страница не существует"
        />
        <Title>Мы не можем найти страницу, которую вы ищете</Title>
        <GoHomeLink to={'/'}>
          <GoHomeButton> На главную</GoHomeButton>
        </GoHomeLink>
      </ErrorPageWrapper>
    </>
  );
}

export default ErrorPage;
