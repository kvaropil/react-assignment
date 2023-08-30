import React, { useState } from 'react';

import { FilterLabel } from './FilterLabel';
import { PriceSlider } from './PriceSlider';
import { TextboxPrice } from './common/TextboxPrice';
import styled from 'styled-components';

const StyledPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${125 + 24 + 24}px;
  width: ${328 + 24}px;
  margin-left: 100px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 24px;
  border-right: 1px solid ${(props) => props.theme.colors.beige};
`;

const StyledTextboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
`;

export const PriceFilter: React.FC = () => {
  const [priceFilter, setPriceFilter] = useState<number[]>([1200, 7600]);

  return (
    <StyledPriceContainer>
      <FilterLabel>Cena za den</FilterLabel>
      <PriceSlider price={priceFilter} setPrice={setPriceFilter} />
      <StyledTextboxContainer>
        {/* TODO: two way data binding for textboxes. Currently can be changed only via slider */}
        <TextboxPrice value={priceFilter[0]} />
        <TextboxPrice value={priceFilter[1]} />
      </StyledTextboxContainer>
    </StyledPriceContainer>
  );
};
