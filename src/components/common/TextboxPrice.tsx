import React, { ChangeEvent, useCallback } from 'react';

import { NumericFormat } from 'react-number-format';
import { TextboxProps } from '../../types';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

const TextboxWrapper = styled.div`
  margin-right: 16px;
  position: relative;
  width: 156px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledTextbox = styled(NumericFormat)`
  border: 1px solid ${(props) => props.theme.colors.beige};

  border-radius: 8px;
  font-size: 16px;
  height: 48px;
  padding-left: 12px;
  padding-right: 21px;
  width: 100%;
`;

const StyledSuffix = styled.span`
  color: ${(props) => props.theme.colors.darkGrey};

  font-size: 16px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const TextboxPrice: React.FC<TextboxProps> = ({ value, onChange }) => {
  // Debounce ensure that price in textfield won't change immediatelly
  // as user type, but fire an event after 0.5s
  const debouncedFunction = debounce((newValue: number) => {
    onChange && onChange(newValue);
  }, 500);

  const handlePriceChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(event.target.value.replace(/\s+/g, ''));
      debouncedFunction(newValue);
    },
    [debouncedFunction],
  );

  return (
    <TextboxWrapper>
      <StyledTextbox
        value={value}
        displayType={'input'}
        thousandSeparator={' '}
        onChange={handlePriceChange}
      />
      <StyledSuffix>Kč</StyledSuffix>
    </TextboxWrapper>
  );
};
