import { CaravanListItem } from './CaravanListItem/CaravanListItem';
import React from 'react';
import { Spinner } from '../common/Spinner';
import styled from 'styled-components';
import { useCaravans } from '../../hooks/caravans/useCaravans';
import { useFetchingStatus } from '../../hooks/common/useFetchingState';
import { useFilteredCaravans } from '../../hooks/caravans/useFilteredCaravans';

const StyledCaravansList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px 48px 100px;
  padding-top: 32px;
  width: 100%;
`;

export const CaravansList: React.FC = () => {
  const { fetchingStatus } = useFetchingStatus();
  const caravans = useCaravans();

  const filteredCaravans = useFilteredCaravans().slice(0, 6);
  return fetchingStatus.status === 'loading' ? (
    <Spinner />
  ) : (
    <StyledCaravansList>
      {filteredCaravans.map((caravan) => {
        // eslint-disable-next-line react/jsx-key
        return <CaravanListItem caravan={caravan} />;
      })}
    </StyledCaravansList>
  );
};
