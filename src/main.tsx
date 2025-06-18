import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';
import ErrorBoundary from './components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
