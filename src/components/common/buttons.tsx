import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;
const ButtonBox = styled.button<{ btnWidth: 'long' | 'short' }>`
  all: unset;
  width: ${(props) => (props.btnWidth === 'long' ? '94%' : '30%')};
  height: 2.5em;
  border-radius: 0.5em;
  background-color: #000;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

interface BtnPropsType {
  type?: 'button' | 'submit';
  btnWidth: 'long' | 'short';
  btnText: string;
}
const Button = ({ type, btnWidth, btnText }: BtnPropsType) => {
  return (
    <ButtonContainer>
      <ButtonBox
        type={type}
        btnWidth={btnWidth}
      >
        {btnText}
      </ButtonBox>
    </ButtonContainer>
  );
};

export default Button;
