import React from 'react';
import PropTypes from 'prop-types';
import ItemWrapper from './../ItemWrapper';

const Item = ({ src, alt }) => (
  <ItemWrapper>
    <img src={src} alt={alt} />
  </ItemWrapper>
);

Item.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Item;
