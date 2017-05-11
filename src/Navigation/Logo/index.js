import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default () => (
  <Link to="/" className="logo">
    <img src="/img/logo.png" alt="logo" />
  </Link>
);