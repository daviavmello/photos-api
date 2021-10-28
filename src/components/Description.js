import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { colors } from "../style/Colors";

export const Description = ({ id }) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
    localStorage.setItem(`user-input-${id}`, e.target.value);
  };

  const handleValue = () => {
    if (isFocused && localStorage.getItem(`user-input-${id}`)) {
      return localStorage.getItem(`user-input-${id}`);
    } else if (isFocused) {
      return input;
    } else {
      return localStorage.getItem(`user-input-${id}`);
    }
  };

  return (
    <Fragment>
      <Input
        placeholder="How do you feel about this?"
        onChange={(e) => handleInput(e)}
        value={handleValue()}
        onFocus={() => setIsFocused((state) => !state)}
        onBlur={() => setIsFocused((state) => !state)}
      />
    </Fragment>
  );
};

const Input = styled.textarea`
  width: auto;
  border: none;
  resize: none;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.light};
  background: transparent;
  color: ${colors.medium};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  ::placeholder {
    color: ${colors.medium};
  }
  :focus {
    outline: none;
    border-bottom: 1px solid ${colors.medium};
    transition: all 0.5s ease-in;
  }
`;
