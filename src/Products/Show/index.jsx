import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from './../Layout';
import SaveButton from './SaveButton';
import ColorButton from './ColorButton';
import Label from './../Label';
import Carousel from './Carousel';
import BuyButton from './BuyButton';

const PrewiewWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 51px;
  position: relative;
`;

const Model = styled.h1`
  color: #3a3a3a;
  font-family: AvenirNextBold;
  font-size: 64px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 226px;
`;

const ColorsWrapper = styled.span`
  padding: 7px 0;
  position: absolute;
  right: 142px;
  top: 0;
`;

const Price = styled.h2`
  color: #e2e2e2;
  font-family: AvenirNextBold;
  font-size: 80px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  right: 0;
  top: 48px;
`;

const Description = styled.p`
  font-family: AvenirNext;
  font-size: 33px;
  font-weight: 500;
  color: #d8d8d8;
`;

const FirstWord = styled.span`
  color: #6e6e6e;
`;

const Show = () => (
  <Layout isShow>
    <Row>
      <Col lg={12}>
        <PrewiewWrapper>
          <img src="/img/bitmap-copy.jpg" alt="bitmap" />
          <Model>ULTRA BOOST</Model>
          <SaveButton />
          <ColorsWrapper>
            <ColorButton color="#c5c5c5" />
            <ColorButton color="#4d87ca" />
            <ColorButton color="#4a4a4a" />
            <ColorButton color="#e0e0e0" />
          </ColorsWrapper>
          <Label isShow>SALE</Label>
          <Price>$170</Price>
        </PrewiewWrapper>
      </Col>
    </Row>
    <Carousel />
    <Description>
      <FirstWord>Adidas</FirstWord> is a German multinational corporation,<br />
      headquartered in Herzogenaurach, Germany, that designs <br />
      and manufactures shoes, clothing and accessories.
    </Description>
    <BuyButton />
  </Layout>
);

export default Show;
