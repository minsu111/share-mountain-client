import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.button<{ btnwidth: 'long' | 'medium' | 'short' }>`
  all: unset;
  width: ${(props) => {
    switch (props.btnwidth) {
      case 'long':
        return '92%';
      case 'medium':
        return '30%';
      case 'short':
        return '25%';
      default:
        return 'auto';
    }
  }};
  margin: 0 0 0 4%;
  height: 2.5em;
  border-radius: 0.5em;
  background-color: #000;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-size: ${(props) => (props.btnwidth === 'short' ? '0.8em' : '1em')};
`;

interface BtnPropsType {
  type?: 'button' | 'submit';
  btnWidth: 'long' | 'medium' | 'short';
  btnText: string;
  form?: string;
  id?: string;
  disabled?: boolean;
  handleBtn?: () => void;
}
const Button = ({
  type,
  btnWidth,
  btnText,
  form,
  id,
  disabled,
  handleBtn,
}: BtnPropsType) => {
  return (
    <ButtonBox
      type={type}
      btnwidth={btnWidth}
      form={form}
      id={id}
      onClick={handleBtn}
      disabled={disabled}
    >
      {btnText}
    </ButtonBox>
  );
};

export default Button;
