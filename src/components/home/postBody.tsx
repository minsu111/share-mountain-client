import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const PostBodyContainer = styled.div`
  width: 100%;
  height: auto;
  /* height: 7vh; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const PostBodyText = styled.div`
  width: 95%;
  height: 90%;
  font-size: 0.8em;
  line-height: 1.3em;
  margin: 4% 0 2% 0;
`;

const ShowMoreBtn = styled.span`
  font-size: 0.9em;
  color: #6c6c6c;
`;

interface PostBodyType {
  postBody: string;
}

const PostBody = ({ postBody }: PostBodyType) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLengthLimit = useRef<number>(75);

  const showText = useMemo(() => {
    const basicText: string = postBody.slice(0, textLengthLimit.current);

    if (postBody.length > textLengthLimit.current) {
      if (isShowMore) {
        return postBody;
      }
      return basicText;
    }
    return postBody;
  }, [isShowMore]);

  return (
    <PostBodyContainer>
      <PostBodyText>
        {showText}{' '}
        <ShowMoreBtn onClick={() => setIsShowMore(true)}>
          {postBody.length > textLengthLimit.current &&
            (isShowMore ? '' : '... 더보기')}
        </ShowMoreBtn>
      </PostBodyText>
    </PostBodyContainer>
  );
};

export default PostBody;
