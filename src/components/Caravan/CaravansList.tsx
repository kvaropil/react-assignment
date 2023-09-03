import { CaravanListItem } from './CaravanListItem/CaravanListItem';
import React from 'react';
import styled from 'styled-components';
import { useCaravans } from '../../hooks/caravans/useCaravans';
import { useFilteredCaravans } from '../../hooks/caravans/useFilteredCaravans';

const StyledCaravansList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px 48px 100px;
  padding-top: 32px;
  width: 100%;
`;

export const CaravansList: React.FC = () => {
  useCaravans();

  const filteredCaravans = useFilteredCaravans().slice(0, 6);
  // since there is no ID on api response I've decided to use
  // index as key
  return (
    <StyledCaravansList>
      {filteredCaravans.map((caravan, index) => {
        return <CaravanListItem key={index} caravan={caravan} />;
      })}
    </StyledCaravansList>
  );
};
