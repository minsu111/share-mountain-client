import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NaviBarContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 6.5vh;
  border-top: 0.1vw solid #e1e1e1;
  background-color: #fff;
  z-index: 10;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BtnWrapper = styled.button`
  all: unset;
  width: 100%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const handleNaviBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.name);
  };

  return (
    <NaviBarContainer>
      <BtnContainer>
        <BtnWrapper
          name='home'
          onClick={handleNaviBtn}
        >
          <img
            src='/assets/images/feed.svg'
            alt='피드'
          />
        </BtnWrapper>
        <BtnWrapper
          name='map'
          onClick={handleNaviBtn}
        >
          <img
            src='/assets/images/map-marker.svg'
            alt='지도(준비중)'
          />
        </BtnWrapper>
        <BtnWrapper
          name='heartList'
          onClick={handleNaviBtn}
        >
          <img
            src='/assets/images/favorite.svg'
            alt='하트리스트'
          />
        </BtnWrapper>
        <BtnWrapper
          name='myPage'
          onClick={handleNaviBtn}
        >
          <img
            src='/assets/images/account.svg'
            alt='마이페이지'
          />
        </BtnWrapper>
      </BtnContainer>
    </NaviBarContainer>
  );
};

export default NavigationBar;
