import React, { useState } from 'react';

import { TypeFilterCard } from './TypeFilterCard';
import { VehicleTypeEnum } from '../types';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { vehicleTypeFilterAtom } from '../state/atoms/filters/vehicleTypeFilter';

const StyledTypeOption = styled.div`
  height: 88px;
  width: 156px;
  background-color: red;
  margin-right: 16px;
`;

const StyledTypeOptions = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    flex-wrap: wrap;
  }
`;

export const TypeFilterOptions: React.FC = () => {
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<
    VehicleTypeEnum[]
  >([]);
  // destruct to only get "setVehicleTypeMethod"
  const [, setVehicleTypeFilter] = useAtom(vehicleTypeFilterAtom);

  const handleTypeClick = (type: VehicleTypeEnum) => {
    setSelectedVehicleTypes((prevSelected) => {
      let updatedTypes;
      if (prevSelected.includes(type)) {
        updatedTypes = prevSelected.filter((t) => t !== type);
      } else {
        updatedTypes = [...prevSelected, type];
      }
      // update global atom state with the new array
      setVehicleTypeFilter(updatedTypes);
      return updatedTypes;
    });
  };

  return (
    <StyledTypeOptions>
      <TypeFilterCard
        heading={'Campervan'}
        text={'Obytka s rozměry osobáku, se kterou dojedete všude.'}
        isSelected={selectedVehicleTypes.includes('Campervan')}
        onClick={() => handleTypeClick('Campervan')}
      />
      <TypeFilterCard
        heading={'Integrál'}
        text={'Král mezi karavany. &nbsp; <br /> Luxus na kolech.'}
        isSelected={selectedVehicleTypes.includes('Intergrated')}
        onClick={() => handleTypeClick('Intergrated')}
      />
      <TypeFilterCard
        heading={'Vestavba'}
        text={'Celý byt geniálně poskládaný do dodávky.'}
        isSelected={selectedVehicleTypes.includes('BuiltIn')}
        onClick={() => handleTypeClick('BuiltIn')}
      />
      <TypeFilterCard
        heading={'Přívěs'}
        text={'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.'}
        isSelected={selectedVehicleTypes.includes('Alcove')}
        onClick={() => handleTypeClick('Alcove')}
      />
    </StyledTypeOptions>
  );
};
