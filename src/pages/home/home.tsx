import React from 'react';
import Post from '../../components/home/post';
import styled from 'styled-components';
import MountainList from '../../components/home/mountainList';

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
      <MountainList />
      <Post />
    </HomeContainer>
  );
};

export default Home;
