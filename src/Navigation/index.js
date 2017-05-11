import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';
import './Navigation.css';

export default () => (
  <nav className="navigation">
    <Logo />
    <Search />
    <div className="menu">
      <span className="menu-item has-submenu">SPORTS</span>
      <span className="submenu">
        <Link to="/" className="submenu-item">SHOES</Link>
        <Link to="/" className="submenu-item">CLOTHING</Link>
        <Link to="/" className="submenu-item">ACCESORIES</Link>
      </span>
      <Link to="/" className="menu-item">BRANDS</Link>
      <Link to="/" className="menu-item">MICOACH</Link>
    </div>
  </nav>
);