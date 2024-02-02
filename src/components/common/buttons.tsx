import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button<{ btnwidth: 'long' | 'short' }>`
  all: unset;
  width: ${(props) => (props.btnwidth === 'long' ? '92%' : '30%')};
  margin: 0 4%;
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
    <ButtonBox
      type={type}
      btnwidth={btnWidth}
    >
      {btnText}
    </ButtonBox>
  );
};

export default Button;
