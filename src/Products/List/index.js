import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe'

const Layout = styled.main`
  width: 100%;
`;

export default () => (
  <Layout>
    <Grid fluid>
      <Filter />
      <Row>
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale={true} price={170} />
        <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} isSale={false} price={220} />
      </Row>
    </Grid>
  </Layout>
);