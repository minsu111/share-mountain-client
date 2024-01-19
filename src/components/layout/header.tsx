import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 0.1vw solid #e1e1e1;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 40%;
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      {location.pathname === '/home' && (
        <Logo
          src="/assets/images/share-mountain.png"
          alt="로고이미지"
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
