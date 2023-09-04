import { FilterLabel } from './FilterLabel';
import React from 'react';
import { TypeFilterOptions } from './TypeFilterOptions';
import styled from 'styled-components';

const StyledTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${125 + 24 + 24}px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const TypeFilter: React.FC = () => {
  return (
    <StyledTypeContainer>
      <FilterLabel>Typ karavanu</FilterLabel>
      <TypeFilterOptions />
    </StyledTypeContainer>
  );
};
