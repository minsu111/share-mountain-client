import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import InputBox1 from '../common/inputBox1';
import { origin_URL } from '../../App';
import { emailRegEx } from '../../utils/utils';

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

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [isDuplicated, setIsDuplicated] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [nickNameValid, setNickNameValid] = useState(false);
  const [pwValid, setPwValid] = useState(true);
  const [pwCheckValid, setPwCheckValid] = useState(true);
  const [validationText, setValidationText] = useState('');

  const handleSignUpInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    switch (e.target.name) {
      case 'email_id':
        setEmail(inputValue);
        setEmailValid(emailRegEx.test(e.target.value));
        break;

      case 'nickname':
        setNickNameValid;
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
        ? setIsDuplicated('1')
        : setIsDuplicated('0');
    } catch (e) {
      console.log(e);
    }

    // if (!emailValid) {
    //   setValidationText('이메일 형식을 확인해주세요.');
    // } else if (isDuplicated) {
    //   setValidationText('이미 사용 중인 이메일입니다.');
    // } else {
    //   setValidationText('사용 가능한 이메일입니다.');
    // }
  };

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
        validationText={
          !emailValid
            ? '이메일 형식을 확인해주세요.'
            : isDuplicated === '1'
            ? '이미 사용 중인 이메일입니다.'
            : emailValid && isDuplicated === '0'
            ? '사용 가능한 이메일입니다.'
            : ''
        }
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
        validationText={nickNameValid ? '사용 가능한 닉네임입니다.' : ''}
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
