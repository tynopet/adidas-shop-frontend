import React from 'react';
import PropTypes from 'prop-types';
import './Price.css';

const Price = ({ price, sale }) => {
  const className = sale ? 'price' : 'price no-sale'
  return (
    <span className={className}>${price}</span>
  )
};

Price.PropTypes = {
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default Price;