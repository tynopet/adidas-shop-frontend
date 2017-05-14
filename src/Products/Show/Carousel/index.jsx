import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Item from './Item';

const MorePhotos = styled.button`
  background-color: transparent;
  border: none;
  color: #c0c0c0;
  cursor: pointer;
  font-face: AvenirNext;
  font-size: 14px;
  text-align: start;
  vertical-align: middle;

  &:focus {
    outline: none;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Line = styled.div`
  background-color: #e7e7e7;
  border-radius: 1.5px;
  margin-bottom: 3px;
  height: 3px;
  width: 159px;
`;

const Carousel = () => (
  <Row>
    <Col lg={2}>
      <ItemWrapper>
        <Item src="/img/bitmap.jpg" alt="shoe" />
      </ItemWrapper>
    </Col>
    <Col lg={2}>
      <ItemWrapper>
        <Item src="/img/bitmap_2.jpg" alt="shoe" />
      </ItemWrapper>
    </Col>
    <Col lg={2}>
      <ItemWrapper>
        <Item src="/img/bitmap_3.jpg" alt="shoe" />
      </ItemWrapper>
    </Col>
    <Col lg={2}>
      <ItemWrapper>
        <Item src="/img/bitmap_4.jpg" alt="shoe" />
      </ItemWrapper>
    </Col>
    <Col lg={3}>
      <ItemWrapper>
        <Line />
        <Line />
        <Line />
      </ItemWrapper>
    </Col>
    <Col lg={1}>
      <ItemWrapper>
        <MorePhotos>see <br /> more <br /> photos</MorePhotos>
      </ItemWrapper>
    </Col>
  </Row>
);

export default Carousel;
