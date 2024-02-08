import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  height: 30%;
`;
const InputLabel = styled.label``;
const InputBox = styled.input`
  all: unset;
  width: 90%;
  background-color: yellow;
`;

const InputBox1 = () => {
  return (
    <InputContainer>
      <InputLabel>
        <InputBox></InputBox>
      </InputLabel>
    </InputContainer>
  );
};

export default InputBox1;

// label props: htmlFor(required), label 유무
// input props: type(required), id, name(required), value(required), placeholder
