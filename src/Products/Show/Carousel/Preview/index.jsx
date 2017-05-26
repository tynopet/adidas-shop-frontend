import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled-components';

const Preview = ({ src, alt, isSelected }) => (
  <Button isSelected={isSelected}>
    <img src={src} alt={alt} />
  </Button>
);

Preview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Preview;
