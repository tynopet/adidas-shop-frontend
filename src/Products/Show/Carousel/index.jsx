import React from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Container from './styled-components';
import { buildStaticUrl, calcImageSize } from './../../../helpers';

const Carousel = ({ images, onClick, selected }) => (
  <Container>
    {images.map((img, idx) => (
      <Preview
        key={img.id}
        onClick={() => onClick(idx)}
        src={buildStaticUrl(img, calcImageSize('carousel'))}
        alt={img.fileName}
        isSelected={idx === selected}
      />
    ))}
  </Container>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Carousel;
