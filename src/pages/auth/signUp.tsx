import React from 'react';
import styled from 'styled-components';

import SignUpInfo from '../../components/auth/signUpInfo';
import Button from '../../components/common/button';

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SignUpBtnWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: flex-end;
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpInfo />
      <SignUpBtnWrapper>
        <Button
          type='submit'
          btnWidth='long'
          btnText='시작하기'
          form='singup_form'
        />
      </SignUpBtnWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
