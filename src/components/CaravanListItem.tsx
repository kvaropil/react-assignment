import { Caravan } from '../types';
import React from 'react';
import styled from 'styled-components';

const StyledCaravanListItemWrapper = styled.div`
  background-color: yellow;
  height: 380px;
  margin-bottom: 32px;
  margin-right: 32px;
  width: 392px;

  // Remove the right margin for every 3rd item
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const StyledCaravanNameHeading = styled.h2`
  color: ${(props) => props.theme.colors.darkBlue};
  margin-left: 16px;
`;

type CaravaListItemProps = {
  caravan: Caravan;
};

export const CaravanListItem: React.FC<CaravaListItemProps> = ({ caravan }) => {
  return (
    <StyledCaravanListItemWrapper>
      {/* Image takes50% height*/}
      {/* Type  */}
      <StyledCaravanNameHeading>{caravan.name}</StyledCaravanNameHeading>
      {/* Details  */}
      {/* Price  */}
    </StyledCaravanListItemWrapper>
  );
};
