import { PriceFilter } from './PriceFilter';
import { PriceSlider } from './PriceSlider';
import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.beige};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TypesSection = styled.div`
  flex: 5;
  border-right: 1px solid ${(props) => props.theme.colors.beige};
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

const ReservationSection = styled.div`
  flex: 3;
  padding-left: 1rem;
  display: flex;
  align-items: center;
`;

export const Filters = () => {
  return (
    <FiltersWrapper>
      <PriceFilter />
      <TypesSection>TypesSection</TypesSection>
      <ReservationSection>ReservationSection</ReservationSection>
    </FiltersWrapper>
  );
};
