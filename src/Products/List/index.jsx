import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Filter from './Filter';
import Shoe from './Shoe';
import Layout from './../Layout';

export default () => (
  <Layout isList>
    <Filter />
    <Row>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
      </Col>
      <Col lg={3} md={4} sm={6} xs={12}>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
      </Col>
    </Row>
  </Layout>
);
