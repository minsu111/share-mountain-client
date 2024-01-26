import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PostHeader from './postHeader';
import PostImgSlider from './postImgSlider';
import PostBody from './postBody';
import PostBottomBar from './postBottomBar';
import MountainCard from './mountainCard';

import PostList from '../../data/post.json';
import DivideLine from '../common/divide';

const Feed = () => {
  const { id } = useParams();
  const mountainPostData = PostList.filter(
    (v) => v.mountainInfo.mountainId === Number(id)
  );

  const location = useLocation();

  return (
    <>
      {location.pathname === '/home'
        ? PostList.map((c) => (
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
          ))
        : mountainPostData.map((c) => (
            <div key={c.postId}>
              <PostHeader userNickName={c.userNickName} />
              <PostImgSlider postingImg={c.postImg} />
              <PostBody postBody={c.postBody} />
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

export default Feed;
