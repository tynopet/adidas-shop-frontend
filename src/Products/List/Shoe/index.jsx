import React from 'react';
import PropTypes from 'prop-types';
import Label from './../../Label';
import { Image, StyledLink as Link, Price } from './styled-components';

const Shoe = ({ imageLink, imageAlt, isSale, price, link }) => {
  // Цвет в рендер фукцнии, чтобы при переходе заново извлекался из ls
  const color = localStorage.getItem('color') || '#fff';
  return (
    <Link to={`${link}/1`}>
      <Image src={imageLink} alt={imageAlt} />
      {isSale && <Label>SALE</Label>}
      <Price isSale={isSale} color={color}>${price}</Price>
    </Link>
  );
};

Shoe.propTypes = {
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isSale: PropTypes.bool,
  price: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

Shoe.defaultProps = {
  isSale: false,
};

export default Shoe;
