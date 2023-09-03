import React from 'react';
import { VehicleTypeProps } from '../../../types';
import styled from 'styled-components';
import { translateVehicleType } from '../../../utils/vehicleTypeTranslate';

const StyledVehicleType = styled.span`
  color: ${(props) => props.theme.colors.orange};

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
  opacity: 1;
  padding: 2px 0;
  text-align: left;
  text-transform: uppercase;
`;

export const VehicleType: React.FC<VehicleTypeProps> = ({ vehicleType }) => {
  return (
    <StyledVehicleType>{translateVehicleType(vehicleType)}</StyledVehicleType>
  );
};
