import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe';

const Container = styled.main`
  margin-top: 102px;
  flex: 1;
`;

export default () => (
  <Container>
    <Grid fluid>
      <Filter />
      <Row>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
        </Col>
      </Row>
    </Grid>
  </Container>
);
