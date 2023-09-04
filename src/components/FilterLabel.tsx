import { PriceLabelProps } from '../types';
import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 16px;
  text-align: left;
  padding-bottom: 16px;
`;

const StyledIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;

export const FilterLabel: React.FC<PriceLabelProps> = ({
  children,
  iconSrc,
}) => {
  return (
    <StyledLabel>
      {children}
      {iconSrc ? <StyledIcon src={iconSrc} /> : null}
    </StyledLabel>
  );
};
