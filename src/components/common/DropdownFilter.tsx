import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import expandMoreIcon from '../../assets/icons/expand_more_black_24dp.svg';
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

const DropdownContainer = styled.div`
  position: relative;
  width: 176px;
`;

const DropdownButton = styled.button`
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

const DropdownMenu = styled.ul`
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

const DropdownIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const DropdownItem = styled.li`
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
  const [dropdownFilterValue, setDropdownFilterValue] = useState<boolean>(true);
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
    <DropdownContainer>
      <DropdownButton {...getToggleButtonProps()}>
        {selectedItem ? selectedItem.label : null}
        <DropdownIcon
          src={expandMoreIcon.src}
          alt='Expand'
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </DropdownButton>
      <DropdownMenu
        {...getMenuProps()}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {dropdownSelectorChoices.map((item, index) => (
          <DropdownItem key={index} {...getItemProps({ item, index })}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
