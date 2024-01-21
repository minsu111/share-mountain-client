import React from 'react';
import MountainBtn from './mountainBtn';
import styled from 'styled-components';

import MountainData from '../../data/mountain.json';

const MountainListContainer = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MountainList = () => {
  return (
    <MountainListContainer>
      {MountainData.map((c) => (
        <MountainBtn mountainInfo={c.mountainInfo} />
      ))}
    </MountainListContainer>
  );
};

export default MountainList;
