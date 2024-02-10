import React, { useState } from 'react';
import InputBox1 from '../common/inputBox1';
import styled from 'styled-components';

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

const SignUpInfo = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');

  const [emailValid, setEmailValid] = useState(true);

  const handleSignUpInput = () => {};

  return (
    <SignUpInfoContainer
      action='/signUp'
      method='POST'
      id='singup_form'
    >
      <InputBox1
        type='email'
        name='email_id'
        placeholder='이메일을 입력해주세요.'
        labelText='이메일(아이디)'
        validationText={
          emailValid
            ? '사용 가능한 이메일입니다.'
            : '이미 사용 중인 이메일입니다.'
        }
      />
      <InputBox1
        type='text'
        name='username'
        placeholder='이름을 입력해주세요.'
        labelText='이름'
      />
      <InputBox1
        type='text'
        name='nickname'
        placeholder='닉네임을 입력해주세요.'
        labelText='닉네임'
      />
      <PasswordInput>
        <InputBox1
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요.'
          labelText='비밀번호'
        />
        <InputBox1
          type='password'
          name='password_check'
          placeholder='비밀번호를 다시 한번 입력해주세요.'
        />
      </PasswordInput>
    </SignUpInfoContainer>
  );
};

export default SignUpInfo;
