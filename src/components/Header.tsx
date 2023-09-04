import LogoSrc from '../assets/images/pragueLabsLogo.svg';
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.beige};
  height: 80px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    border-bottom: 1px solid ${(props) => props.theme.colors.beige};
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 35px;
  margin-bottom: 22px;
  margin-left: 100px;
  margin-top: 22px;
  width: 201px;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}) {
    align-items: center;
    margin: 0;
    margin-top: 22px;
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={LogoSrc.src} alt='Company logo' />
    </HeaderWrapper>
  );
};
