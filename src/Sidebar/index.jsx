import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Search from './Search';
import NavLink from './NavLink';
import Submenu from './Submenu';
import { BurgerButton, Container, Nav } from './styled';
import burgerImg from './burger-button.svg';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <Container>
        <Logo />
        <Search onChange={this.props.onChange} />
        <BurgerButton onClick={this.handleClick}><img src={burgerImg} alt="menu" /></BurgerButton>
        <Nav isOpened={this.state.isOpened}>
          <Submenu title="football">
            <NavLink to="/products/football/accessories">ACCESORIES</NavLink>
            <NavLink to="/products/football/apparel">APPAREL</NavLink>
            <NavLink to="/products/football/cleats">CLEATS</NavLink>
          </Submenu>
          <Submenu title="running">
            <NavLink to="/products/running/shoes">SHOES</NavLink>
            <NavLink to="/products/running/apparel">APPAREL</NavLink>
            <NavLink to="/products/running/accessories">ACCESORIES</NavLink>
          </Submenu>
          <Submenu title="basketball">
            <NavLink to="/products/basketball/shoes">SHOES</NavLink>
            <NavLink to="/products/basketball/apparel">APPAREL</NavLink>
            <NavLink to="/products/basketball/accessories">ACCESORIES</NavLink>
          </Submenu>
        </Nav>
      </Container>
    );
  }
}

Menu.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Menu;
