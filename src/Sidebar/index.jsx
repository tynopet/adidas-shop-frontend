import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import NavLink from './NavLink';
import Submenu from './Submenu';

const Sidebar = styled.aside`
  min-width: 414px;
  background-color: #0e0e0e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: AvenirNextBold;
  font-size: 24px;
`;

const NavWrapper = styled.nav`
  margin-top: 150px;
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
      <Submenu title="football">
        <NavLink exact to="football/shoes" submenu>SHOES</NavLink>
        <NavLink to="football/clothing" submenu>CLOTHING</NavLink>
        <NavLink to="football/accesories" submenu>ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="running">
        <NavLink exact to="running/shoes" submenu>SHOES</NavLink>
        <NavLink to="running/clothing" submenu>CLOTHING</NavLink>
        <NavLink to="running/accesories" submenu>ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="basketball">
        <NavLink exact to="basketball/shoes" submenu>SHOES</NavLink>
        <NavLink to="basketball/clothing" submenu>CLOTHING</NavLink>
        <NavLink to="basketball/accesories" submenu>ACCESORIES</NavLink>
      </Submenu>
    </NavWrapper>
  </Sidebar>
);
