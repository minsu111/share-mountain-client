import React from 'react';
import styled from 'styled-components';

const TextAreaBox = styled.textarea`
  width: 86%;
  border: none;
  resize: none;
  outline: none;

  margin: 4%;
  padding: 3%;
  height: 8em;
  background-color: #e2e2e2;
  border-radius: 0.5em;
`;

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
}

const TextArea = ({ id, name, placeholder }: TextAreaProps) => {
  return (
    <TextAreaBox
      id={id}
      name={name}
      placeholder={placeholder}
    ></TextAreaBox>
  );
};

export default TextArea;
