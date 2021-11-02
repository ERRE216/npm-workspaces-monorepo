import React from "react";
import styled from "styled-components";

export interface ButtonProps extends StyledButtonProps {
  text: string;
}

interface StyledButtonProps {
  backgroundColor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 50px;
`;

export function Button({ text, backgroundColor }: ButtonProps) {
  return <StyledButton backgroundColor='#2a2a2a'>{text}</StyledButton>;
}
