import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary.tsx';
import { store } from '@store/store.ts';
import { GlobalStyle } from '@styles/GlobalStyle.ts';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>
);
