import { InstantReservationFilter } from './InstantReservationFilter';
import { PriceFilter } from './PriceFilter';
import React from 'react';
import { TypeFilter } from './TypeFilter';
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
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

const ReservationSection = styled.div`
  flex: 3;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

export const Filters: React.FC = () => {
  return (
    <FiltersWrapper>
      <PriceFilter />
      <TypesSection>
        <TypeFilter />
      </TypesSection>
      <ReservationSection>
        <InstantReservationFilter />
      </ReservationSection>
    </FiltersWrapper>
  );
};
