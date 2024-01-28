import React from 'react';
import styled from 'styled-components';

const PostInput = styled.input`
  display: none;
`;

const UploadPost = () => {
  return (
    <div>
      <form
        action='/add'
        method='POST'
      >
        <label htmlFor='img1'>
          파일 업로드하기
          <PostInput
            type='file'
            id='img1'
            accept='image/*'
            multiple
          />
        </label>
      </form>
    </div>
  );
};

export default UploadPost;
