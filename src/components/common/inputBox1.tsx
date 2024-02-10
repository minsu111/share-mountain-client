// 로그인 인풋
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
`;

const InputLabel = styled.label`
  width: 86%;
  font-size: 0.9em;
  color: #474747;
`;

const InputBox = styled.input`
  all: unset;
  padding: 0 3%;
  width: 86%;
  height: 2.7em;
  background-color: #eae9e9;
  border-radius: 10px;
  margin: 1.5% 0;
  font-size: 0.9em;
`;

const ValidationText = styled.div<{ validationText: string | undefined }>`
  width: 88%;
  text-align: left;
  padding: 0 6%;
  font-size: 0.8em;
  color: ${(props) =>
    props.validationText === '사용 가능한 이메일입니다.' ? 'green' : 'red'};
`;

interface InputProps {
  type: 'text' | 'number' | 'password' | 'tel' | 'email';
  id?: string;
  name: string;
  placeholder?: string;
  labelText?: string;
  validationText?: string;
}

const InputBox1 = ({
  type,
  name,
  placeholder,
  labelText,
  validationText,
}: InputProps) => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputBox
        type={type}
        name={name}
        placeholder={placeholder}
      ></InputBox>
      <ValidationText validationText={validationText}>
        {validationText}
      </ValidationText>
    </InputContainer>
  );
};

export default InputBox1;
