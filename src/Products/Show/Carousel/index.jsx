import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Preview from './Preview';
import Container from './styled-components';

const Carousel = ({ images, onClick, selected }) => (
  <Row>
    {images.map(({ id, src, alt }, idx) => (
      <Col lg={2} key={id} onClick={() => onClick(idx)}>
        <Container>
          <Preview src={src} alt={alt} isSelected={id === selected} />
        </Container>
      </Col>
    ))}
  </Row>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default Carousel;
