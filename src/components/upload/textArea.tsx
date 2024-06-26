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
  background-color: #e1e1e1;
  border-radius: 0.5em;

  font-family: 'PretendardLight', sans-serif;
`;

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  onchange: () => void;
}

const TextArea = ({ id, name, placeholder, onchange }: TextAreaProps) => {
  return (
    <TextAreaBox
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onchange}
    ></TextAreaBox>
  );
};

export default TextArea;
