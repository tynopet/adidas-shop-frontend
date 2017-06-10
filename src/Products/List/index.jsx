import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe';
import { fetchProducts } from './../../api';
import { buildUrl, buildStaticUrl } from './../../helpers';

const Container = styled.main`
  margin-top: 165px;
  flex: 1;

  @media (min-width: 768px) {
    margin-top: 102px;
  }
`;

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sizes: {},
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    fetchProducts(this.props.match.url).then(state => this.setState(state));
  }

  componentWillReceiveProps({ match }) {
    fetchProducts(match.url).then(state => this.setState(state));
  }

  handleFilterChange(filter) {
    this.setState((prevState) => {
      const sizes = Object.assign(
        {},
        prevState.sizes,
        { [filter]: !prevState.sizes[filter] },
      );
      return { sizes };
    });
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Filter
            sizes={this.state.sizes}
            onClick={this.handleFilterChange}
          />
          <Row>
            {this.state.products
              .filter(({ sizes }) => sizes.filter(s => this.state.sizes[s]).length)
              .map(({ id, price, title, images, isSale }) => (
                <Col lg={4} md={4} sm={6} xs={12} key={id}>
                  <Shoe
                    imageSrc={buildStaticUrl(images[0], 512)}
                    imageAlt={title}
                    price={price}
                    isSale={isSale}
                    to={buildUrl(this.props, id)}
                  />
                </Col>
              ))}
          </Row>
        </Grid>
      </Container>
    );
  }
}

List.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default List;
