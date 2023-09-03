import { CaravanListItem } from './CaravanListItem/CaravanListItem';
import React from 'react';
import styled from 'styled-components';
import { useCaravans } from '../../hooks/caravans/useCaravans';

const StyledCaravansList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px 48px 100px;
  padding-top: 32px;
  width: 100%;
`;

export const CaravansList: React.FC = () => {
  const caravans = useCaravans().slice(0, 6);
  return (
    <StyledCaravansList>
      {caravans.map((caravan) => {
        return <CaravanListItem key={caravan.name} caravan={caravan} />;
      })}
    </StyledCaravansList>
  );
};
