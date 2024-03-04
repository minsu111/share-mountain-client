import React, { useState } from 'react';
import styled from 'styled-components';

import SignUpForm from '../../components/auth/signUpForm';
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
  const [isAllValidated, setIsAllValidated] = useState(false);

  return (
    <SignUpContainer>
      <SignUpForm setIsAllValidated={setIsAllValidated} />
      <SignUpBtnWrapper>
        <Button
          type='submit'
          btnWidth='long'
          btnText='시작하기'
          form='singup_form'
          disabled={isAllValidated}
        />
      </SignUpBtnWrapper>
    </SignUpContainer>
  );
};

export default SignUp;
