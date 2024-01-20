import React from 'react';
import Post from '../../components/home/post';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Post />
    </HomeContainer>
  );
};

export default Home;
