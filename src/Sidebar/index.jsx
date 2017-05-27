import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import NavLink from './NavLink';
import Submenu from './Submenu';
import { BurgerButton, Container, Nav } from './styled-components';
import burgerImg from './burger-button.svg';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isOpened: !state.isOpened }));
  }

  render() {
    return (
      <Container>
        <Logo />
        <Search />
        <BurgerButton onClick={this.handleClick}><img src={burgerImg} alt="menu" /></BurgerButton>
        <Nav isOpened={this.state.isOpened}>
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
      </Container>
    );
  }
}

export default Menu;
