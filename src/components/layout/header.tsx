import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 7vh;
  border-bottom: 0.1vw solid #e1e1e1;
  background-color: #fff;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 40%;
`;

const BackBtnWrapper = styled.div`
  width: 92%;
  height: 7vh;

  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 4%;
`;

const BackBtn = styled.div`
  width: 5%;

  img {
    width: 100%;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {location.pathname === '/home' ? (
        <HeaderContainer>
          <Logo
            src='/assets/images/share-mountain.svg'
            alt='로고이미지'
          />
        </HeaderContainer>
      ) : (
        <BackBtnWrapper>
          <BackBtn onClick={() => navigate(-1)}>
            <img
              src='/assets/images/back_btn.svg'
              alt='뒤로가기'
            />
          </BackBtn>
        </BackBtnWrapper>
      )}
    </>
  );
};

export default Header;
