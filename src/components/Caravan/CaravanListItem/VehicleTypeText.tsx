import React from 'react';
import styled from 'styled-components';
import { translateVehicleType } from '../../../utils/vehicleTypeTranslate';

const StyledVehicleType = styled.span`
  color: ${(props) => props.theme.colors.orange};

  /* font: normal normal bold 12px/12px Roboto; */
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 1;
  text-align: left;
  text-transform: uppercase;
  padding: 2px 0;
  margin: 0;
  font-size: 12px;
`;

type VehicleTypeProps = {
  vehicleType: string;
};

export const VehicleType: React.FC<VehicleTypeProps> = ({ vehicleType }) => {
  return (
    <StyledVehicleType>{translateVehicleType(vehicleType)}</StyledVehicleType>
  );
};
