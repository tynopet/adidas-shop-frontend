import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe';

const Container = styled.main`
  margin-top: 102px;
  flex: 1;

  @media (max-width: 575px) {
    margin-top: 165px;
  }
`;

const List = ({ location }) => (
  <Container>
    <Grid fluid>
      <Filter />
      <Row>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            isSale
            price={170}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            price={220}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            isSale
            price={170}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            price={220}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            isSale
            price={170}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            price={220}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            isSale
            price={170}
            to={`${location.pathname}/1`}
          />
        </Col>
        <Col lg={4} md={4} sm={6} xs={12}>
          <Shoe
            imageSrc={'/img/bitmap.png'}
            imageAlt={'shoe'}
            price={220}
            to={`${location.pathname}/1`}
          />
        </Col>
      </Row>
    </Grid>
  </Container>
);

List.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default List;
