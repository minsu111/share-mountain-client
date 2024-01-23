import React from 'react';
import Layout from './components/layout/layout';
import { GlobalStyle } from './styles/globalStyle';
import AppRouter from './routes/routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
