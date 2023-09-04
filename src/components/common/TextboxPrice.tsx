import { NumericFormat } from 'react-number-format';
import React from 'react';
import { TextboxProps } from '../../types';
import styled from 'styled-components';

const TextboxWrapper = styled.div`
  position: relative;
  width: 156px;
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

const Suffix = styled.span`
  color: ${(props) => props.theme.colors.darkGrey};

  font-size: 16px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const TextboxPrice: React.FC<TextboxProps> = ({ value }) => {
  // TODO: get rid of readonly, implement two-way data binding

  return (
    <TextboxWrapper>
      <StyledTextbox
        value={value}
        displayType={'input'}
        thousandSeparator={' '}
        readOnly
      />
      <Suffix>Kč</Suffix>
    </TextboxWrapper>
  );
};
