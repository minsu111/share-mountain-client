import React from 'react';
import styled from 'styled-components';
import Feed from '../../components/home/feed';

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
      <Feed />
    </HomeContainer>
  );
};

export default Home;
