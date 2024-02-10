// 로그인 인풋
import React from 'react';
import styled from 'styled-components';
import Button from './button';

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
  width: 88%;
  font-size: 0.9em;
  color: #474747;
`;

const InputBoxWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputBox = styled.input`
  all: unset;
  padding: 0 3%;
  width: 100%;
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
    props.validationText &&
    ['사용 가능한 이메일입니다.', '사용 가능한 닉네임입니다.'].includes(
      props.validationText
    )
      ? 'green'
      : 'red'};
`;

interface InputProps {
  type: 'text' | 'number' | 'password' | 'tel' | 'email';
  id?: string;
  name: string;
  placeholder?: string;
  labelText?: string;
  validationText?: string;
  verifyBtnText?: string;
}

const InputBox1 = ({
  type,
  name,
  placeholder,
  labelText,
  validationText,
  verifyBtnText,
}: InputProps) => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputBoxWrapper>
        <InputBox
          type={type}
          name={name}
          placeholder={placeholder}
        ></InputBox>
        {verifyBtnText ? (
          <Button
            type='submit'
            btnWidth='short'
            btnText={verifyBtnText}
            id='nickName_check'
          />
        ) : null}
      </InputBoxWrapper>

      <ValidationText validationText={validationText}>
        {validationText}
      </ValidationText>
    </InputContainer>
  );
};

export default InputBox1;
