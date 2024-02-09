import React from 'react';
import styled from 'styled-components';

import SignUpInfo from '../../components/auth/signUpInfo';

const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpInfo />
    </SignUpContainer>
  );
};

export default SignUp;
