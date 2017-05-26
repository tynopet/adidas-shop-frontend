import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

const LogoWrapper = styled(Link) `
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
`;

export default () => (
  <LogoWrapper to="/football/shoes">
    <img src={logo} alt="logo" />
  </LogoWrapper>
);
