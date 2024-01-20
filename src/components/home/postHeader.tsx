import React from 'react';
import styled from 'styled-components';

const PostHeaderContainer = styled.div`
  width: 98%;
  height: 6vh;
  border-bottom: 0.1vw solid #e1e1e1;
  padding: 0 1%;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em;
`;

const ProfileImgWrapper = styled.div`
  width: 8%;
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
  font-size: 0.9em;
  color: #474747;
`;

interface userNickNameType {
  userNickName: string;
}

const PostHeader = ({ userNickName }: userNickNameType) => {
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
          <ProfileNameText>{userNickName}</ProfileNameText>
        </ProfileNameWrapper>
      </ProfileWrapper>
    </PostHeaderContainer>
  );
};

export default PostHeader;
