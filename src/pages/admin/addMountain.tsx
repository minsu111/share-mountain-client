import React from 'react';
import styled from 'styled-components';
import { origin_URL } from '../../App';

const PostInput = styled.input`
  display: none;
`;

const AddMountain = () => {
  return (
    <div>
      <form
        action={`${origin_URL}/mountain/add/mountainInfo`}
        method='POST'
        encType='multipart/form-data'
      >
        <div>
          <label htmlFor='mountain_name'>산 이름:</label>
          <input
            id='mountain_name'
            name='mountain_name'
          />
        </div>
        <div>
          <label htmlFor='mountain_level'>해발고도:</label>
          <input
            type='number'
            id='mountain_level'
            name='mountain_level'
          />
          m
        </div>
        <div>
          <label htmlFor='mountain_address'>주소:</label>
          <input
            id='mountain_address'
            name='mountain_address'
          />
        </div>
        <div>
          <label htmlFor='img1'>
            사진 업로드
            <PostInput
              type='file'
              id='img1'
              name='img1'
              accept='image/*'
            />
          </label>
        </div>
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddMountain;
