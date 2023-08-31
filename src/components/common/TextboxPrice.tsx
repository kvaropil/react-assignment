import { NumericFormat } from 'react-number-format';
import React from 'react';
import { TextboxProps } from '../../types';
import styled from 'styled-components';

const StyledTextbox = styled(NumericFormat)`
  width: 156px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.colors.beige};
  border-radius: 8px;
  font-size: 16px;
  padding-left: 12px;
`;

export const TextboxPrice: React.FC<TextboxProps> = ({ value }) => {
  // TODO: get rid of readonly, implement two-way data binding
  // TODO: add "Kč" placeholder
  return (
    <StyledTextbox
      value={value}
      displayType={'input'}
      thousandSeparator={' '}
      readOnly
    />
  );
};
