import { InstantReservationFilter } from './InstantReservationFilter';
import { PriceFilter } from './PriceFilter';
import React from 'react';
import { TypeFilter } from './TypeFilter';
import styled from 'styled-components';

const StyledFiltersWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.beige};
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTypesSection = styled.div`
  flex: 5;
  border-right: 1px solid ${(props) => props.theme.colors.beige};
  display: flex;
  align-items: center;
  padding-left: 16px;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.colors.beige};
    border-right: none;
    height: 229px;
    padding-bottom: 96px;
  }
`;

const StyledReservationSection = styled.div`
  flex: 3;
  padding-left: 16px;
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const Filters: React.FC = () => {
  return (
    <StyledFiltersWrapper>
      <PriceFilter />
      <StyledTypesSection>
        <TypeFilter />
      </StyledTypesSection>
      <StyledReservationSection>
        <InstantReservationFilter />
      </StyledReservationSection>
    </StyledFiltersWrapper>
  );
};
