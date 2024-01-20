import React from 'react';
import PostHeader from '../../components/home/postHeader';
import PostImgSlider from '../../components/home/postImgSlider';
import PostBody from '../../components/home/postBody';
import PostBottomBar from './postBottomBar';
import MountainCard from './mountainCard';

import PostList from '../../data/post.json';
import DivideLine from '../common/divide';

const Post = () => {
  return (
    <>
      {PostList.map((c) => (
        <div key={c.postId}>
          <PostHeader userNickName={c.userNickName} />
          <PostImgSlider postingImg={c.postImg} />
          <PostBody postBody={c.postBody} />
          <MountainCard mountain={c.mountainInfo} />
          <PostBottomBar
            heart={c.heart}
            postingDate={c.postingDate}
          />
          <DivideLine />
        </div>
      ))}
    </>
  );
};

export default Post;
