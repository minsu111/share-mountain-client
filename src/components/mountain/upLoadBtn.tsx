import React from 'react';
import styled from 'styled-components';

const UpLoadPostContainer = styled.div`
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpLoadBtn = styled.button`
  all: unset;
  border: 1px solid #474747;
  border-radius: 5px;
  padding: 2%;

  cursor: pointer;
`;

const UpLoadPostBtn = () => {
  return (
    <UpLoadPostContainer>
      <UpLoadBtn>게시물 올리기</UpLoadBtn>
    </UpLoadPostContainer>
  );
};

export default UpLoadPostBtn;
