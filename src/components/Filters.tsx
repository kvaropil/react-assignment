import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const PriceSliderSection = styled.div`
  flex: 4;
  border-right: 2px solid #f7f6f3;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

const TypesSection = styled.div`
  flex: 5;
  border-right: 2px solid #f7f6f3;
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
      <PriceSliderSection>PriceSliderSection</PriceSliderSection>
      <TypesSection>TypesSection</TypesSection>
      <ReservationSection>ReservationSection</ReservationSection>
    </FiltersWrapper>
  );
};
