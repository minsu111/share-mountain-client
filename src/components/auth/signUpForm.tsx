import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import InputBox1 from '../common/inputBox1';
import { origin_URL } from '../../App';
import { emailRegEx, nicknameRegEx } from '../../utils/utils';

const SignUpInfoContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const PasswordInput = styled.div`
  width: 100%;
  height: auto;
`;

interface SignUpFormType {
  setIsAllValidated: Dispatch<SetStateAction<boolean>>;
}

const SignUpForm = ({ setIsAllValidated }: SignUpFormType) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [nickNameValid, setNickNameValid] = useState(false);
  const [isNickDuplicated, setIsNickDuplicated] = useState(false);
  const [pwValid, setPwValid] = useState(true);
  const [pwCheckValid, setPwCheckValid] = useState(true);
  // const [validationText, setValidationText] = useState('');

  const handleSignUpInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    switch (e.target.name) {
      case 'email_id':
        setEmail(inputValue);
        setEmailValid(emailRegEx.test(e.target.value));
        break;

      case 'nickname':
        setNickName(inputValue);
        setNickNameValid(nicknameRegEx.test(e.target.value));
    }
  };

  const handleEmailInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!emailRegEx.test(e.target.value)) {
      return;
    }

    try {
      const response = await axios.get(
        `${origin_URL}/emailCheck/${e.target.value}`
      );
      console.log(response.data);
      response.data === 'isDuplicated'
        ? setIsEmailDuplicated(true)
        : setIsEmailDuplicated(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNickNameInput = async () => {
    if (!nicknameRegEx.test(nickName)) {
      return;
    }

    try {
      const response = await axios.get(
        `${origin_URL}/nicknameCheck/${nickName}`
      );
      console.log(response.data);
      response.data === 'isDuplicated'
        ? setIsNickDuplicated(true)
        : setIsNickDuplicated(false);
    } catch (e) {
      console.log(e);
    }
  };

  const emailValidationText = !emailValid
    ? '이메일 형식을 확인해주세요.'
    : isEmailDuplicated
    ? '이미 사용 중인 이메일입니다.'
    : '사용 가능한 이메일입니다.';

  const nickNameValidationText = !nickNameValid
    ? '닉네임 형식을 확인해주세요.'
    : isNickDuplicated
    ? '이미 사용 중인 닉네임입니다.'
    : '사용 가능한 닉네임입니다.';

  return (
    <SignUpInfoContainer
      action={`${origin_URL}/signup`}
      method='POST'
      id='singup_form'
    >
      <InputBox1
        type='email'
        name='email_id'
        placeholder='이메일을 입력해주세요.'
        labelText='이메일(아이디)'
        validationtext={emailValidationText}
        onChangeHandler={handleSignUpInput}
        onBlur={handleEmailInput}
        required={true}
      />
      <InputBox1
        type='text'
        name='username'
        placeholder='이름을 입력해주세요.'
        labelText='이름'
        onChangeHandler={handleSignUpInput}
        required={true}
      />
      <InputBox1
        type='text'
        name='nickname'
        placeholder='닉네임을 입력해주세요.'
        labelText='닉네임'
        verifyBtnText='중복 확인'
        handleBtn={handleNickNameInput}
        validationtext={nickNameValidationText}
        onChangeHandler={handleSignUpInput}
        required={true}
      />
      <PasswordInput>
        <InputBox1
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요.'
          labelText='비밀번호'
          onChangeHandler={handleSignUpInput}
          required={true}
        />
        <InputBox1
          type='password'
          name='password_check'
          placeholder='비밀번호를 다시 한번 입력해주세요.'
          onChangeHandler={handleSignUpInput}
          required={true}
        />
      </PasswordInput>
    </SignUpInfoContainer>
  );
};

export default SignUpForm;
