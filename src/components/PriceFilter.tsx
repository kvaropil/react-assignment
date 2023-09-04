import { FilterLabel } from './FilterLabel';
import { PriceSlider } from './PriceSlider';
import React from 'react';
import { TextboxPrice } from './common/TextboxPrice';
import { priceFilterAtom } from '../state/atoms/filters/priceFilter';
import styled from 'styled-components';
import { useAtom } from 'jotai';

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

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    padding-left: 16px;
    border-right: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.beige};
    width: 100%;
    margin-left: 0;
  }
`;

const StyledTextboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 24px;
`;

export const PriceFilter: React.FC = () => {
  const [priceFilter, setPriceFilter] = useAtom<number[]>(priceFilterAtom);

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
