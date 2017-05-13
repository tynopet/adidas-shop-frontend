import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Label from './../../Label';

const ShoeLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
  text-decoration: none;
  border-top: 6px solid #f4f4f4;
  border-left: 9px solid #f4f4f4;
  border-right: 8px solid #f4f4f4;
  border-bottom: 9px solid #f4f4f4;
`;

const ShoeImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
`;

const Price = styled.span`
  background-image: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : 'none')};
  background-color: ${props => (props.isSale ? 'none' : '#fff')};
  border-top: 8px solid #f4f4f4;
  color: ${props => (props.isSale ? '#fff' : '#0d0d0d')};
  cursor: pointer;
  font-size: 30px;
  padding: 23px 107px 27px 106px;
  text-decoration: none;
`;

const Shoe = ({ imageLink, imageAlt, isSale, price }) => {
  const sale = isSale ? <Label>SALE</Label> : '';
  return (
    <Col lg={3}>
      <ShoeLink to="/item">
        <ShoeImage src={imageLink} alt={imageAlt} />
        {sale}
        <Price isSale={isSale}>${price}</Price>
      </ShoeLink>
    </Col>
  );
};

Shoe.propTypes = {
  imageLink: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isSale: PropTypes.bool,
  price: PropTypes.number.isRequired,
};

Shoe.defaultProps = {
  isSale: false,
};

export default Shoe;
