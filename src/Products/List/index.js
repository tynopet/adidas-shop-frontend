import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Filter from './Filter';
import Shoe from './Shoe'

export default () => (
  <main>
    <Grid fluid>
      <Filter />
      <Shoe imageLink={'/img/bitmap.png'} imageAlt={'shoe'} sale={true} price={170} />
    </Grid>
  </main>
);