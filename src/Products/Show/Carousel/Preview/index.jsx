import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from './styled-components';

const Preview = ({ src, alt, isSelected, onClick }) => (
  <Button isSelected={isSelected} onClick={onClick}>
    <Image src={src} alt={alt} />
  </Button>
);

Preview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Preview;
