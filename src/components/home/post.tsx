import React from 'react';
import { useLocation } from 'react-router-dom';
import PostHeader from './postHeader';
import PostImgSlider from './postImgSlider';
import PostBody from './postBody';
import MountainCard from './mountainCard';
import PostBottomBar from './postBottomBar';
import DivideLine from '../common/divide';

interface postDataType {
  postData: {
    _id: string;
    userNickName: string;
    postImg: string[];
    postBody: string;
    postDate: string;
    mountainInfo: {
      _id: string;
      mountainName: string;
      mountainLevel: string;
      mountainAddress: string;
      mountainImgURL: string;
    };
  };
}

const Post = ({ postData }: postDataType) => {
  const location = useLocation();

  return (
    <>
      <PostHeader userNickName={postData.userNickName} />
      <PostImgSlider postImg={postData.postImg} />
      <PostBody postBody={postData.postBody} />
      {location.pathname === '/home' ? (
        <MountainCard mountain={postData.mountainInfo} />
      ) : null}
      <PostBottomBar
        heart={0}
        postingDate={postData.postDate}
      />
      <DivideLine />
    </>
  );
};

export default Post;
