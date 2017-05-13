import React from 'react';
import { Row } from 'react-flexbox-grid';
import Filter from './Filter';
import Shoe from './Shoe';
import Layout from './../Layout';

export default () => (
  <Layout>
    <Filter />
    <Row>
      <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale price={170} />
      <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} price={220} />
    </Row>
  </Layout>
);
