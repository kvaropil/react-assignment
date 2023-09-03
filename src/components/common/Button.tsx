import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};

  border-radius: 8px;
  border: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  letter-spacing: 0px;
  opacity: 1;
  cursor: pointer;
  text-align: center;
  width: 155px;

  transition: 0.2s ease;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.colors.green)};
  }
`;

type ButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
