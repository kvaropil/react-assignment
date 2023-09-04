import { CaravanPriceProps } from '../../../types';
import { FilterLabel } from '../../Filters/FilterLabel';
import { NumericFormat } from 'react-number-format';
import React from 'react';
import actionIcon from '../../../assets/icons/actionFilter.svg';
import styled from 'styled-components';

const StyledPriceFromWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 17px;
`;

const StyledPriceFrom = styled.span`
  color: ${(props) => props.theme.colors.darkBlue};

  letter-spacing: 0px;
  margin: 0;
  opacity: 1;
  padding-bottom: 16px;
  text-align: right;
  font-weight: bold;
`;

const StyledIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-left: 16px;
`;

export const CaravanPrice: React.FC<CaravanPriceProps> = ({
  price,
  instantBookable,
}) => {
  return (
    <StyledPriceFromWrapper>
      <FilterLabel>Cena od</FilterLabel>
      <StyledPriceFrom>
        <NumericFormat
          value={price}
          thousandSeparator={' '}
          displayType={'text'}
          suffix={' Kč/den'}
          renderText={(value: string) => <>{value}</>}
        />
        {instantBookable && (
          <StyledIcon src={actionIcon.src} alt='Instant booking' />
        )}
      </StyledPriceFrom>
    </StyledPriceFromWrapper>
  );
};
