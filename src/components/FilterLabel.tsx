import { PriceLabelProps } from '../types';
import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 16px;
  text-align: left;
`;

export const FilterLabel: React.FC<PriceLabelProps> = ({ children }) => {
  return <Label>{children}</Label>;
};
