import { CaravaListItemProps, Caravan } from '../../../types';

import { CaravanDetails } from './CaravanDetails';
import { CaravanListItemImg } from './CaravanImg';
import React from 'react';
import { VehicleType } from './VehicleTypeText';
import styled from 'styled-components';

const StyledCaravanListItemWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.beige};

  border-radius: 8px;
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
  border-bottom: 1px solid ${(props) => props.theme.colors.beige};
  margin: 0 16px 5px 0px;
  padding: 4px 0 4px 0;
`;

const StyledDetailsWrappet = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

export const CaravanListItem: React.FC<CaravaListItemProps> = ({ caravan }) => {
  return (
    <StyledCaravanListItemWrapper>
      <CaravanListItemImg imgs={caravan.pictures} />
      <StyledDetailsWrappet>
        <VehicleType vehicleType={caravan.vehicleType} />
        <StyledCaravanNameHeading>{caravan.name}</StyledCaravanNameHeading>
        <CaravanDetails
          location={caravan.location}
          passengersCapacity={caravan.passengersCapacity}
          sleepingCapacity={caravan.sleepCapacity}
          toilet={caravan.toilet}
          shower={caravan.shower}
        />
        {/* Price  */}
      </StyledDetailsWrappet>
    </StyledCaravanListItemWrapper>
  );
};
