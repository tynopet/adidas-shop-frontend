import React from 'react';
import PropTypes from 'prop-types';
import './Sale.css';

const Sale = ({ sale }) => {
  const className = sale ? 'sale' : 'sale no-sale'
  return (
    <span className={className}></span>
  )
};

Sale.PropTypes = {
  sale: PropTypes.bool.isRequired,
};

export default Sale;