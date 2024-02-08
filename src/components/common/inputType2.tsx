// 로그인 인풋
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  margin: 3% 0;
`;
const InputBox = styled.input`
  all: unset;
  width: 86%;
  height: 1.3em;
  margin: 3% 0;
  padding: 1%;
  border-bottom: 0.1em solid #d3d7db;
`;

interface InputProps {
  type: 'text' | 'number' | 'password' | 'tel';
  id?: string;
  name: string;
  placeholder?: string;
}

const InputBox2 = ({ type, name, placeholder }: InputProps) => {
  return (
    <InputContainer>
      <InputBox
        type={type}
        name={name}
        placeholder={placeholder}
      ></InputBox>
    </InputContainer>
  );
};

export default InputBox2;
