import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(({ selected, submenu, ...props }) => <Link {...props} />)`
  color: ${props => (props.selected ? '#fff' : '#3c3c3c')};
  cursor: pointer;
  font-family: ${props => (props.submenu ? 'AndaleMono' : 'AvenirNextBold')};
  font-weight: ${props => (props.submenu ? 'normal' : 'bold')};
  margin-bottom: ${props => (props.submenu ? '30px;' : '29px')};
  text-decoration: none;
`;

export default NavLink;
