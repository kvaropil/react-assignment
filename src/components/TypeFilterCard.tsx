import React, { useState } from 'react';
import { StyledTypeCardContainerProps, TypeFilterCardProps } from '../types';

import ReactHtmlParse from 'react-html-parser';
import styled from 'styled-components';

const StyledTypeCardContainer = styled.div<StyledTypeCardContainerProps>`
  height: ${88 + 4}px;
  width: 156px;
  margin-right: 16px;
  border-radius: 8px;
  padding-bottom: 8px;

  border: ${(props) => (props.isSelected ? '2px' : '1px')} solid
    ${(props) =>
      props.isSelected ? props.theme.colors.green : props.theme.colors.beige};
  padding-top: ${(props) => (props.isSelected ? '10px' : '11px')};
  padding-left: ${(props) => (props.isSelected ? '11px' : '12px')};
`;

const StyledTypeCardHeading = styled.h2`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-top: 0;
  margin-bottom: 4px;

  color: ${(props) => props.theme.colors.darkBlue};
`;

const StyledTypeCardText = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  margin-top: 4px;
  margin-bottom: 0;

  color: ${(props) => props.theme.colors.darkGrey};
`;

export const TypeFilterCard: React.FC<TypeFilterCardProps> = ({
  heading,
  text,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <StyledTypeCardContainer isSelected={isSelected} onClick={handleOnClick}>
      <StyledTypeCardHeading>{heading}</StyledTypeCardHeading>
      <StyledTypeCardText>{ReactHtmlParse(text)}</StyledTypeCardText>
    </StyledTypeCardContainer>
  );
};