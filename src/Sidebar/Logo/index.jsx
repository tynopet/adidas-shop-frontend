import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoWrapper = styled(Link) `
  cursor: pointer;
  text-align: center;
  margin: 17px 15px;

  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

const Logo = styled.img`
  width: 44px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export default () => (
  <LogoWrapper to="/">
    <Logo src={logo} alt="logo" />
  </LogoWrapper>
);
