import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { origin_URL } from '../../App';
import styled from 'styled-components';

import Post from './post';
import UpLoadPostBtn from '../mountain/upLoadBtn';

const MountainPostHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
`;

const HeaderContentsWrapper = styled.div`
  width: 100%;
  height: 50%;
  color: #474747;
  display: flex;
  align-items: flex-end;

  div {
    font-size: 1.4em;
    font-weight: 500;
    padding: 0 2% 0 3%;
  }

  span {
    font-size: 1em;
  }
`;

interface postDataType {
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
}

const Feed = () => {
  const [postData, setPostData] = useState<postDataType[]>();
  const { mountainName } = useParams();
  // const mountainPostData = postData?.filter((v) => v.mountainInfo._id === id);

  const location = useLocation();

  useEffect(() => {
    const getPostData = async () => {
      try {
        const response =
          location.pathname === '/home'
            ? await axios.get(`${origin_URL}/post/posts`)
            : await axios.get(`${origin_URL}/post/${mountainName}`);
        // console.log(response.data);
        setPostData(response.data);
      } catch (error) {
        console.error('Error fetching mountain data:', error);
      }
    };
    getPostData();
  }, []);

  return (
    <>
      {location.pathname === '/home' ? (
        postData?.map((post) => (
          <div key={post.mountainInfo._id}>
            <Post postData={post} />
          </div>
        ))
      ) : (
        <div>
          <MountainPostHeader>
            <HeaderContentsWrapper>
              <div>게시물</div>
              <span>{postData?.length}개</span>
            </HeaderContentsWrapper>
          </MountainPostHeader>
          {postData?.length === 0 ? (
            <UpLoadPostBtn />
          ) : (
            postData?.map((post) => (
              <div key={post._id}>
                <Post postData={post} />
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Feed;
