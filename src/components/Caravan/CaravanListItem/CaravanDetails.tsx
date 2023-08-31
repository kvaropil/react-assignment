import IconBed from '../../../assets/icons/Icon-Bed.svg';
import IconPerson from '../../../assets/icons/Icon-Person.svg';
import IconShower from '../../../assets/icons/Icon-Shower.svg';
import IconToilet from '../../../assets/icons/Icon-Toilet.svg';
import React from 'react';
import styled from 'styled-components';

const StyledCaravanDetailsWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.beige};
  margin-top: 5px;
  margin-bottom: 14px;
`;

const StyledCaravanEquipmentWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  align-items: center;
`;

const StyledCaravanEquipmentItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 14px;

  &:first-child {
    margin-left: 0;
  }
`;

const StyledLocation = styled.h3`
  font-size: 14px;
  font-weight: 200;
  text-align: left;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.darkBlue};
  opacity: 1;
  padding: 3px 0 2px 0;
`;

const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const StyledIconAdditionalText = styled.span`
  font-size: 14px;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.darkBlue};
`;

type CaravanDetailsProps = {
  location: string;
  passengersCapacity: number;
  sleepingCapacity: number;
  toilet: boolean;
  shower: boolean;
};

export const CaravanDetails: React.FC<CaravanDetailsProps> = ({
  location,
  passengersCapacity,
  sleepingCapacity,
  toilet,
  shower,
}) => {
  return (
    <StyledCaravanDetailsWrapper>
      <StyledLocation>{location}</StyledLocation>
      <StyledCaravanEquipmentWrapper>
        <StyledCaravanEquipmentItem>
          <StyledIcon src={IconPerson.src} alt={'Passengers Capacity'} />
          <StyledIconAdditionalText>
            {passengersCapacity}
          </StyledIconAdditionalText>
        </StyledCaravanEquipmentItem>
        <StyledCaravanEquipmentItem>
          <StyledIcon src={IconBed.src} alt={'Sleeping Capacity'} />
          <StyledIconAdditionalText>
            {sleepingCapacity}
          </StyledIconAdditionalText>
        </StyledCaravanEquipmentItem>
        {toilet && (
          <StyledCaravanEquipmentItem>
            <StyledIcon src={IconToilet.src} alt={'Toilet'} />
          </StyledCaravanEquipmentItem>
        )}
        {shower && (
          <StyledCaravanEquipmentItem>
            <StyledIcon src={IconShower.src} alt={'Shower'} />
          </StyledCaravanEquipmentItem>
        )}
      </StyledCaravanEquipmentWrapper>
    </StyledCaravanDetailsWrapper>
  );
};
