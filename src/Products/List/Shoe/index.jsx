import React from 'react';
import PropTypes from 'prop-types';
import Label from './../../Label';
import { Image, StyledLink as Link, Price } from './styled-components';

const Shoe = ({ imageSrc, imageAlt, isSale, price, to }) => (
  <Link to={to}>
    <Image src={imageSrc} alt={imageAlt} />
    {isSale && <Label>SALE</Label>}
    <Price isSale={isSale}>${price}</Price>
  </Link>
);

Shoe.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isSale: PropTypes.bool,
  price: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired,
};

Shoe.defaultProps = {
  isSale: false,
};

export default Shoe;
