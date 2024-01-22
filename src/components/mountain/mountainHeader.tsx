import React from 'react';
import styled from 'styled-components';

const MountainHeaderContainer = styled.div`
  width: 390px;
  height: 14vh;
  border-bottom: 1px solid #e1e1e1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5%;
`;

const MountainInfo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4%;

  div {
    font-size: 1.4em;
    font-weight: 600;
  }

  span {
    color: #8b8b8b;
    font-weight: 500;
    font-size: 1em;
  }
`;
const MountainLikes = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4%;

  img {
    width: 25%;
  }

  div {
    color: #8b8b8b;
    font-size: 0.8em;
  }
`;

interface mountainInfoType {
  mountainInfo: {
    mountainName: string;
    mountainLevel: string;
    mountainLikes: number;
    mountainImgURL: string;
  };
}

const MountainHeader = ({ mountainInfo }: mountainInfoType) => {
  return (
    <MountainHeaderContainer>
      <MountainInfo>
        <div>{mountainInfo.mountainName}</div>
        <span>{mountainInfo.mountainLevel}</span>
      </MountainInfo>
      <MountainLikes>
        <img src='/assets/images/like.svg' />
        <div>{mountainInfo.mountainLikes}</div>
      </MountainLikes>
    </MountainHeaderContainer>
  );
};

export default MountainHeader;
