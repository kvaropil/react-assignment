import styled, { keyframes } from 'styled-components';

import React from 'react';
import expandMoreIcon from '../../assets/icons/expand_more_black_24dp.svg';
import { instantBookableFilterAtom } from '../../state/atoms/filters/instantBookableFilter';
import { useAtom } from 'jotai';
import { useSelect } from 'downshift';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledDropdownContainer = styled.div`
  position: relative;
  width: 176px;
`;

const StyledDropdownButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.beige};
  color: ${(props) => props.theme.colors.darkBlue};

  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  padding: 10px 15px;
  text-align: left;
  width: 100%;
`;

const StyledDropdownMenu = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.beige};

  animation: ${slideDown} 0.3s forwards;
  border-radius: 8px;
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 10;
`;

const StyledDropdownIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const StyledDropdownItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;

  &:hover {
    background-color: ${(props) => props.theme.colors.beige};
    border-radius: 8px;
  }
`;

const dropdownSelectorChoices = [
  { value: true, label: 'Ano' },
  { value: false, label: 'Ne' },
];

export const DropdownFilter: React.FC = () => {
  const [dropdownFilterValue, setDropdownFilterValue] = useAtom(
    instantBookableFilterAtom,
  );
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect({
    items: dropdownSelectorChoices,
    initialSelectedItem: dropdownSelectorChoices[0],
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        setDropdownFilterValue(selectedItem.value);
      }
    },
  });

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton {...getToggleButtonProps()}>
        {selectedItem ? selectedItem.label : null}
        <StyledDropdownIcon
          src={expandMoreIcon.src}
          alt='Expand'
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </StyledDropdownButton>
      <StyledDropdownMenu
        {...getMenuProps()}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {dropdownSelectorChoices.map((item, index) => (
          <StyledDropdownItem key={index} {...getItemProps({ item, index })}>
            {item.label}
          </StyledDropdownItem>
        ))}
      </StyledDropdownMenu>
    </StyledDropdownContainer>
  );
};
