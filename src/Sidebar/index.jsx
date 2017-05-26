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

const Nav = styled.nav`
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
    <Nav>
      <Submenu title="football">
        <NavLink to="/products/football/shoes">SHOES</NavLink>
        <NavLink to="/products/football/clothing">CLOTHING</NavLink>
        <NavLink to="/products/football/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="running">
        <NavLink to="/products/running/shoes">SHOES</NavLink>
        <NavLink to="/products/running/clothing">CLOTHING</NavLink>
        <NavLink to="/products/running/accesories">ACCESORIES</NavLink>
      </Submenu>
      <Submenu title="basketball">
        <NavLink to="/products/basketball/shoes">SHOES</NavLink>
        <NavLink to="/products/basketball/clothing">CLOTHING</NavLink>
        <NavLink to="/products/basketball/accesories">ACCESORIES</NavLink>
      </Submenu>
    </Nav>
  </Sidebar>
);
