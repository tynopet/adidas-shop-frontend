import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Filter from './Filter';
import Collection from './Collection'
import './Shoes.css';

export default () => (
  <main>
    <Grid fluid>
      <Filter />
      <Collection />
    </Grid>
  </main>
);