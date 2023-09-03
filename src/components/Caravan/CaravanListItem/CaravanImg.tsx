import { CaravanListItemImgProps } from '../../../types';
import React from 'react';
import styled from 'styled-components';

const StyledCaravanImg = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  height: 50%;
  width: 100%;
  margin-bottom: 12px;
  background-size: cover; // ensure that image covers the div without stretching
  background-position: center; // center image in the div
`;

export const CaravanListItemImg: React.FC<CaravanListItemImgProps> = ({
  imgs,
}) => {
  return (
    <StyledCaravanImg
      style={{ backgroundImage: `url(${imgs[0]})` }}
    ></StyledCaravanImg>
  );
};
