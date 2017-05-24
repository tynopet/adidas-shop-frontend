import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(({ selected, submenu, ...props }) => <NavLink {...props} activeStyle={{ color: '#fff' }} />) `
  color: #3c3c3c;
  cursor: pointer;
  font-family: AndaleMono;
  font-weight: normal;
  margin-bottom: 25px;
  text-decoration: none;
`;

export default StyledNavLink;
