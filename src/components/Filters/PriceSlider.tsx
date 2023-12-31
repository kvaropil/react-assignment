import { PriceSliderProps, TrackProps } from '../../types';

import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';

const SliderContainer = styled.div`
  cursor: pointer;
  height: 24px;
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

export const PriceSlider: React.FC<PriceSliderProps> = ({
  price,
  setPrice,
}) => {
  const handlePriceChange = (value: number | readonly number[]) => {
    if (Array.isArray(value)) {
      setPrice(value);
    }
  };

  return (
    <SliderContainer>
      <StyledReactSlider
        ariaLabel={['Minimal price', 'Maximal price']}
        ariaValuetext={(state) => `Price value ${state.valueNow}`}
        value={price}
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
