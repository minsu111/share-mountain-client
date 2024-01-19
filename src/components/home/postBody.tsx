import React from 'react';
import styled from 'styled-components';

const PostBodyContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const PostBodyText = styled.div`
  width: 95%;
  font-size: 0.8em;
  line-height: 1.3em;
  margin: 4% 0;
`;

interface PostBodyType {
  postBody: string;
}

const PostBody = ({ postBody }: PostBodyType) => {
  return (
    <PostBodyContainer>
      <PostBodyText>{postBody}</PostBodyText>
    </PostBodyContainer>
  );
};

export default PostBody;
