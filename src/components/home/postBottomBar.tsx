import React from 'react';
import styled from 'styled-components';

const BarCotainer = styled.div`
  width: 100%;
  height: 4vh;
  font-size: 0.8em;
  color: #474747;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BarWarpper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const HeartIcon = styled.img``;
const HeartNum = styled.span``;
const PostingDate = styled.div``;

interface PostBottomBarType {
  heart: number;
  postingDate: string;
}

const PostBottomBar = ({ heart, postingDate }: PostBottomBarType) => {
  return (
    <BarCotainer>
      <BarWarpper>
        <HeartWrapper>
          <HeartIcon
            src='/assets/images/heart.svg'
            alt='하트 수:'
          />
          <HeartNum>{heart}</HeartNum>
        </HeartWrapper>
        <PostingDate>{postingDate}</PostingDate>
      </BarWarpper>
    </BarCotainer>
  );
};

export default PostBottomBar;
