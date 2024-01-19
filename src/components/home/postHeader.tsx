import React from 'react';
import styled from 'styled-components';

const PostHeaderContainer = styled.div`
  width: 94%;
  height: 6vh;
  border: 0.1vw solid #e1e1e1;
  padding: 0 3%;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
`;

const ProfileImgWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 100%;
`;
const ProfileNameWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ProfileNameText = styled.span`
  width: 100%;
  color: #474747;
`;

const PostHeader = () => {
  return (
    <PostHeaderContainer>
      <ProfileWrapper>
        <ProfileImgWrapper>
          <ProfileImg
            src='/assets/images/account.svg'
            alt='프로필'
          />
        </ProfileImgWrapper>
        <ProfileNameWrapper>
          <ProfileNameText>광교산엄홍길</ProfileNameText>
        </ProfileNameWrapper>
      </ProfileWrapper>
    </PostHeaderContainer>
  );
};

export default PostHeader;
