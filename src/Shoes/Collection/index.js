import React from 'react';
import { Row } from 'react-flexboxgrid';
import ShoeCard from './ShoeCard';
import './Collection.css';

export default () => (
  <Row>
    <ShoeCard imageLink={'/img/bitmap.png'} imageAlt={'shoe'} sale={true} price={170} />
  </Row>
);