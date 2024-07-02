import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import InputBox2 from '../../components/common/inputBox2';
import Button from '../../components/common/button';
import { loginPostFetch } from '@/api/user/loginPostFetch';
import { useUserStore } from '@/store/useUserStore';
import ModalBox from '@/components/common/modalBox';
import { useModalStore } from '@/store/useModalStore';
import { useToastStore } from '@/store/useToastStore';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const LoginTitle = styled.div`
  width: 90%;
  height: 18%;
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

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
  const { setAccessToken, setUserInfo } = useUserStore();
  const { setModal, onOpen, onClose } = useModalStore();

  const { setToast } = useToastStore();

  const handleEmailSignUpBtn = () => {
    navigate('/signUp');
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await loginPostFetch({ email, password });
      const { data } = response;
      setAccessToken(data.token);
      setUserInfo({ ...data.user });
      setToast('로그인 성공');
      navigate('/home');
    } catch (error) {
      console.error(error);
      setModal(
        <ModalBox
          type='alert'
          titleText='로그인 실패'
          subText='없는 아이디이거나 비밀번호가 일치하지 않습니다. 다시 시도해주세요.'
          onClick={onClose}
        />
      );
      onOpen();
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>
        <div>산을 나누다</div>
        <div>Share Mountain</div>
      </LoginTitle>
      <LoginInputBox>
        <form onSubmit={handleLogin}>
          <div>
            <InputBox2
              type='text'
              name='email'
              placeholder='이메일(아이디)'
            />
            <InputBox2
              type='password'
              name='password'
              placeholder='비밀번호'
            />
          </div>
          <Button
            type='submit'
            btnWidth='long'
            btnText='로그인'
          />
        </form>
      </LoginInputBox>
      <EmailSignUpBtn>
        <button onClick={handleEmailSignUpBtn}>이메일 회원가입</button>
      </EmailSignUpBtn>
    </LoginContainer>
  );
};

export default Login;
