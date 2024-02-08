import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import InputBox2 from '../../components/common/inputType2';
import Button from '../../components/common/button';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const LoginTitle = styled.div`
  width: 90%;
  height: 20%;
  padding: 5%;

  :first-child {
    font-size: 1.5em;
  }

  :nth-child(2) {
    font-size: 2.5em;
    font-weight: 500;
  }
`;
const LoginInputBox = styled.div`
  width: 100%;
  height: 34%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;

  form {
    height: 75%;
  }
`;

const EmailSignUpBtn = styled.div`
  width: 90%;
  height: 6%;
  padding: 0 5%;
  display: flex;
  justify-content: right;
  align-items: center;

  button {
    all: unset;
    color: #474747;
    font-size: 0.8em;
    border-bottom: 1px solid #a3a3a3;

    cursor: pointer;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const handleEmailSignUpBtn = () => {
    navigate('/signUp');
  };

  return (
    <LoginContainer>
      <LoginTitle>
        <div>sub</div>
        <div>main main main main main</div>
      </LoginTitle>
      <LoginInputBox>
        <form>
          <InputBox2
            type='text'
            name='id_input'
            placeholder='이메일(아이디)'
          />
          <InputBox2
            type='number'
            name='pw_input'
            placeholder='비밀번호'
          />
        </form>
        <Button
          type='submit'
          btnWidth='long'
          btnText='로그인'
        />
      </LoginInputBox>
      <EmailSignUpBtn>
        <button onClick={handleEmailSignUpBtn}>이메일 회원가입</button>
      </EmailSignUpBtn>
    </LoginContainer>
  );
};

export default Login;
