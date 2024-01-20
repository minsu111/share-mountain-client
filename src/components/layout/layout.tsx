import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './header';
import NavigationBar from './navigationBar';
import Footer from './footer';

const LayoutContainer = styled.div`
  position: absolute;
  width: 390px;
  height: 100vh;
  border: 0.1vw solid #e1e1e1;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <NavigationBar />
    </LayoutContainer>
  );
};

export default Layout;
