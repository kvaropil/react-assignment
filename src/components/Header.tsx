import LogoSrc from '../assets/images/prague-labs-logo.png';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  align-items: center;
  background-color: white;
  border: 2px solid #f7f6f3;
  box-sizing: border-box;
  display: flex;
  height: 5rem;
  padding: 0.625rem;
  width: 100%;
`;

const Logo = styled.img`
  padding-left: 5rem;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={LogoSrc.src} alt='Company logo' />
    </HeaderWrapper>
  );
};
