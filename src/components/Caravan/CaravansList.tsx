import React, { useState } from 'react';

import { Button } from '../common/Button';
import { CaravanListItem } from './CaravanListItem/CaravanListItem';
import { Spinner } from '../common/Spinner';
import styled from 'styled-components';
import { useCaravans } from '../../hooks/caravans/useCaravans';
import { useFetchingStatus } from '../../hooks/common/useFetchingState';
import { useFilteredCaravans } from '../../hooks/caravans/useFilteredCaravans';

const StyledCaravansList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 100px 0 100px;
  padding-top: 32px;
  width: 100%;
`;

const StyledLoadMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${48 - 32}px;
  margin-bottom: 115px;
`;

export const CaravansList: React.FC = () => {
  const allFilteredCaravans = useFilteredCaravans();
  const { fetchingStatus } = useFetchingStatus();
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const displayedCaravans = allFilteredCaravans.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
    console.log(visibleCount);
  };

  const caravans = useCaravans();

  if (fetchingStatus.status === 'loading') {
    return <Spinner />;
  }

  return (
    <>
      <StyledCaravansList>
        {displayedCaravans.map((caravan) => (
          // eslint-disable-next-line react/jsx-key
          <CaravanListItem caravan={caravan} />
        ))}
      </StyledCaravansList>
      <StyledLoadMoreButtonWrapper>
        {visibleCount < allFilteredCaravans.length && (
          <Button onClick={handleLoadMore}>Načíst další</Button>
        )}
      </StyledLoadMoreButtonWrapper>
    </>
  );
};
