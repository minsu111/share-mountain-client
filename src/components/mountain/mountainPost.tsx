import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../home/feed';
import UpLoadPostBtn from './upLoadBtn';

const MountainPostContainer = styled.div`
  width: 100%;
`;
const MountainPostHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const HeaderContentsWrapper = styled.div`
  width: 100%;
  height: 50%;
  color: #474747;
  display: flex;
  align-items: flex-end;

  div {
    font-size: 1.4em;
    font-weight: 500;
    padding: 0 2% 0 3%;
  }

  span {
    font-size: 1em;
  }
`;

const MountainPost = () => {
  // const { id } = useParams();
  // const mountainPostData = PostList.filter(
  //   (v) => v.mountainInfo._id === Number(id)
  // );

  return (
    <MountainPostContainer>
      <Feed />
    </MountainPostContainer>
  );
};

export default MountainPost;
