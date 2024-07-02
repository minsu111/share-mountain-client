import React, { useEffect } from 'react';
import { GlobalStyle } from './styles/globalStyle';
import AppRouter from './routes/routes';
import { useUserStore } from './store/useUserStore';
import Cookies from 'universal-cookie';
import { useModalStore } from './store/useModalStore';
import Toast from './components/common/toast';

export const origin_URL = 'http://localhost:8080';

function App() {
  const cookies = new Cookies();

  const { isOpen, Modal } = useModalStore();

  const { removeUserInfo } = useUserStore();
  const token = cookies.get('token');

  useEffect(() => {
    if (!token) removeUserInfo();
  }, []);

  return (
    <>
      <GlobalStyle />
      {isOpen ? Modal : null}
      <Toast />
      <AppRouter />
    </>
  );
}

export default App;
