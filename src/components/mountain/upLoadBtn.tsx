import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <UpLoadPostContainer>
      <UpLoadBtn onClick={() => navigate('/upload/post')}>
        게시물 올리기
      </UpLoadBtn>
    </UpLoadPostContainer>
  );
};

export default UpLoadPostBtn;
