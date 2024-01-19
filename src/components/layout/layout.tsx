import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './header';
import NavigationBar from './navigationBar';
import Footer from './footer';
import PostHeader from '../home/postHeader';
import PostImgSlider from '../home/postImgSlider';

const LayoutContainer = styled.div`
  position: absolute;
  width: 390px;
  height: 100vh;
  border: 0.1vw solid #e1e1e1;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <PostHeader />
      <PostImgSlider />
      {/* 퍼블리싱용 */}
      <NavigationBar />
    </LayoutContainer>
  );
};

export default Layout;
