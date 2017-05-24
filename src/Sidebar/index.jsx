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
        <NavLink exact to="/football/shoes">SHOES</NavLink>
        <NavLink exact to="/football/clothing">CLOTHING</NavLink>
        <NavLink exact to="/football/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="running">
        <NavLink exact to="/running/shoes">SHOES</NavLink>
        <NavLink exact to="/running/clothing">CLOTHING</NavLink>
        <NavLink exact to="/running/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="basketball">
        <NavLink exact to="/basketball/shoes">SHOES</NavLink>
        <NavLink exact to="/basketball/clothing">CLOTHING</NavLink>
        <NavLink exact to="/basketball/accesories">ACCESORIES</NavLink>
      </Submenu>
    </NavWrapper>
  </Sidebar>
);
