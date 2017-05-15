import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(({ selected, submenu, ...props }) => <NavLink {...props} activeStyle={{ color: '#fff' }} />) `
  color: #3c3c3c;
  cursor: pointer;
  font-family: ${props => (props.submenu ? 'AndaleMono' : 'AvenirNextBold')};
  font-weight: ${props => (props.submenu ? 'normal' : 'bold')};
  margin-bottom: ${props => (props.submenu ? '30px;' : '29px')};
  text-decoration: none;
`;

export default StyledNavLink;
