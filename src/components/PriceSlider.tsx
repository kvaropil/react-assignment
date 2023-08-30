import React, { useState } from 'react';

import ReactSlider from 'react-slider';
import { TrackProps } from '../types';
import styled from 'styled-components';

const SliderContainer = styled.div`
  cursor: pointer;
  height: 24px;
  margin-top: 37px;
  width: 100%;
`;

const StyledReactSlider = styled(ReactSlider)`
  height: 4px;
  outline: none;

  .thumb {
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 50%;
    height: 24px;
    outline: none;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;

    &:hover {
      cursor: grab;
    }
  }
`;

const StyledTrack = styled.div<TrackProps>`
  background: ${(props) =>
    props.index === 1 ? props.theme.colors.green : props.theme.colors.beige};
  height: 4px;
`;

type PriceSliderProps = {
  price: number[];
  setPrice: (value: number[]) => void;
};

export const PriceSlider: React.FC<PriceSliderProps> = ({
  price,
  setPrice,
}) => {
  const handlePriceChange = (
    value: number | readonly number[],
    index: number,
  ) => {
    if (Array.isArray(value)) {
      setPrice(value);
    }
  };

  return (
    <SliderContainer>
      <StyledReactSlider
        ariaLabel={['Minimal price', 'Maximal price']}
        ariaValuetext={(state) => `Price value ${state.valueNow}`}
        defaultValue={price}
        max={10000}
        min={100}
        onChange={handlePriceChange}
        step={100}
        renderTrack={(props, state) => (
          <StyledTrack
            index={state.index}
            style={props.style}
            key={props.key}
          />
        )}
      />
    </SliderContainer>
  );
};
