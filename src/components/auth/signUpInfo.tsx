import React from 'react';
import InputBox1 from '../common/inputBox1';
import styled from 'styled-components';

const SignUpInfoContainer = styled.div`
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
  return (
    <SignUpInfoContainer>
      <InputBox1
        type='email'
        name='email_id'
        placeholder='이메일을 입력해주세요.'
        labelText='이메일(아이디)'
      />
      <InputBox1
        type='text'
        name='username'
        placeholder='이름을 입력해주세요.'
        labelText='이름'
      />
      <InputBox1
        type='tel'
        name='phone_num'
        placeholder='숫자만 입력해주세요.'
        labelText='휴대폰 번호'
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
