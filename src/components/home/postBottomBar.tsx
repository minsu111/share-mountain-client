import React from 'react';

interface PostBottomBarType {
  heart: number;
  postingDate: string;
}

const PostBottomBar = ({ heart, postingDate }: PostBottomBarType) => {
  return (
    <div>
      <div>하트 수: {heart}</div>
      <div>포스팅 날짜: {postingDate}</div>
    </div>
  );
};

export default PostBottomBar;
