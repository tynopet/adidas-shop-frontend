import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from 'react-flexbox-grid';
import Sale from './Sale';
import Price from './Price';
import './ShoeCard.css';

const ShoeCard = ({ imageLink, imageAlt, sale, price }) => (
  <Col lg={4}>
    <Link to="/details" className="shoe-card">
      <img src={imageLink} alt={imageAlt} className="shoe-card-image" />
      <Sale show={sale} />
      <Price price={price} sale={sale} />
    </Link>
  </Col>
);

ShoeCard.PropTypes = {
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
}

export default ShoeCard;