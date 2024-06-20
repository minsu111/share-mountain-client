// 로그인 인풋
import React, { useState } from 'react';
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

const InputBox = styled.input<{ disabled: boolean }>`
  all: unset;
  padding: 0 3%;
  width: 100%;
  height: 2.7em;
  background-color: ${(props) =>
    props.disabled ? 'rgb(189, 189, 189)' : '#eae9e9'};
  border-radius: 10px;
  margin: 1.5% 0;
  font-size: 0.9em;
`;

const ValidationText = styled.div<{ validationtext: string | undefined }>`
  width: 88%;
  text-align: left;
  padding: 0 6%;
  font-size: 0.8em;
  color: ${(props) =>
    props.validationtext &&
    [
      '사용 가능한 이메일입니다.',
      '사용 가능한 닉네임입니다.',
      '사용 가능한 비밀번호입니다.',
    ].includes(props.validationtext)
      ? 'green'
      : 'red'};
`;

interface InputProps {
  type: 'text' | 'number' | 'password' | 'tel' | 'email';
  id?: string;
  name: string;
  placeholder?: string;
  labelText?: string;
  validationtext?: string;
  verifyBtnText?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBtn?: () => void | boolean;
}

const InputBox1 = ({
  type,
  name,
  placeholder,
  labelText,
  validationtext,
  verifyBtnText,
  required,
  disabled,
  onBlur,
  onChangeHandler,
  handleBtn,
}: InputProps) => {
  // const [value, setValue] = useState('');
  const [showValidationText, setShowValidationText] = useState(false);

  // const checkInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  const handleValidationText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setShowValidationText(true);
  };

  const combinedHandleBtn = () => {
    if (handleBtn) {
      handleBtn();
    }
    setShowValidationText(true);
  };

  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputBoxWrapper>
        <InputBox
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onBlur={handleValidationText}
          onFocus={() => {
            setShowValidationText(false);
          }}
          required={required}
          disabled={disabled}
        ></InputBox>
        {verifyBtnText ? (
          <Button
            type='button'
            btnWidth='short'
            btnText={verifyBtnText}
            handleBtn={combinedHandleBtn}
          />
        ) : null}
      </InputBoxWrapper>
      {showValidationText ? (
        <ValidationText validationtext={validationtext}>
          {validationtext}
        </ValidationText>
      ) : null}
    </InputContainer>
  );
};

export default InputBox1;
