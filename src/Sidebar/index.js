import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import NavLink from './NavLink';
import SubmenuWrapper from './SubmenuWrapper';

const Sidebar = styled.aside`
  width: 414px;
  background-color: #0e0e0e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: AvenirNextBold;
  font-size: 24px;
`;

const NavWrapper = styled.nav`
  margin-top: 148px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <NavWrapper>
      <SubmenuWrapper title="SPORTS">
        <NavLink to="/" submenu selected>SHOES</NavLink>
        <NavLink to="/" submenu>CLOTHING</NavLink>
        <NavLink to="/" submenu>ACCESORIES</NavLink>
      </SubmenuWrapper>
      <NavLink to="/">BRANDS</NavLink>
      <NavLink to="/">MICOACH</NavLink>
    </NavWrapper>
  </Sidebar>
);