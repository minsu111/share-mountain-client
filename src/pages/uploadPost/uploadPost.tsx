import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { origin_URL } from '../../App';
import axios from 'axios';

const PostInput = styled.input`
  display: none;
`;

interface mountainDataType {
  _id: string;
  mountainId: number;
  mountainName: string;
  mountainLevel: string;
  mountainAddress: string;
  mountainImgURL: string;
  mountainLikes: number;
}

const UploadPost = () => {
  const [mountainData, setMountainData] = useState<mountainDataType[]>();

  useEffect(() => {
    const getMountainData = async () => {
      try {
        const response = await axios.get(`${origin_URL}/mountain`);
        console.log(response.data);
        setMountainData(response.data);
      } catch (error) {
        console.error('Error fetching mountain data:', error);
      }
    };
    getMountainData();
  }, []);

  return (
    <div>
      <form
        action={`${origin_URL}/addPost`}
        method='POST'
        encType='multipart/form-data'
      >
        {mountainData?.map((c: mountainDataType) => (
          <div>
            <input
              type='radio'
              name='select_mountain'
              id={c.mountainName}
              value={c.mountainName}
            />
            <label htmlFor={c.mountainName}> {c.mountainName}</label>
          </div>
        ))}

        <div>
          <label htmlFor='img2'>파일 업로드하기</label>
          <PostInput
            type='file'
            id='img2'
            name='img2'
            accept='image/*'
            multiple
          />
        </div>
        <div>
          <div>본문을 입력해주세요.</div>
          <textarea
            id='post_text'
            name='post_text'
          ></textarea>
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};

export default UploadPost;
