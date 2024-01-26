import React from 'react';
import Layout from './components/layout/layout';
import { GlobalStyle } from './styles/globalStyle';
import AppRouter from './routes/routes';

export const origin_URL = 'http://localhost:8080';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
