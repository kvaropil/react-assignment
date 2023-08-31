import React, { useState } from 'react';

import { TypeFilterCard } from './TypeFilterCard';
import styled from 'styled-components';

const StyledTypeOption = styled.div`
  height: 88px;
  width: 156px;
  background-color: red;
  margin-right: 16px;
`;

const StyledTypeOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TypeFilterOptions: React.FC = () => {
  return (
    <StyledTypeOptions>
      <TypeFilterCard
        heading={'Campervan'}
        text={'Obytka s rozměry osobáku, se kterou dojedete všude.'}
      />
      <TypeFilterCard
        heading={'Integrál'}
        text={'Král mezi karavany. &nbsp; <br /> Luxus na kolech.'}
      />
      <TypeFilterCard
        heading={'Vestavba'}
        text={'Celý byt geniálně poskládaný do dodávky.'}
      />
      <TypeFilterCard
        heading={'Přívěs'}
        text={'Tažný karavan za vaše auto. Od kapkovitých až po rodinné.'}
      />
    </StyledTypeOptions>
  );
};
