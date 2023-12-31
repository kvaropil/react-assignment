import { DropdownFilter } from '../common/DropdownFilter';
import { FilterLabel } from './FilterLabel';
import React from 'react';
import actionIcon from '../../assets/icons/actionFilter.svg';
import styled from 'styled-components';

const StyledInstantReservationFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: ${125 + 24 + 24}px;
  width: ${328 + 24}px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
`;

export const InstantReservationFilter: React.FC = () => {
  return (
    <StyledInstantReservationFilterWrapper>
      <FilterLabel iconSrc={actionIcon.src}>Okamžitá rezervace</FilterLabel>
      <DropdownFilter />
    </StyledInstantReservationFilterWrapper>
  );
};
