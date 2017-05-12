import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';

const LogoWrapper = styled(Link) `
  margin-top: 31px;
  margin-bottom: 21px;
  text-align: center;
`;

export default () => (
  <LogoWrapper to="/">
    <img src={logo} alt="logo" />
  </LogoWrapper>
);