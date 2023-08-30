import LogoSrc from '../assets/images/pragueLabsLogo.svg';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  border-bottom: 1px solid ${(props) => props.theme.beige};
  height: 80px;
  width: 100%;
`;

const Logo = styled.img`
  height: 35px;
  margin-bottom: 22px;
  margin-left: 100px;
  margin-top: 22px;
  width: 201px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={LogoSrc.src} alt='Company logo' />
    </HeaderWrapper>
  );
};
