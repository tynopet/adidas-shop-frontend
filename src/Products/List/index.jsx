import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe';
import { fetchShoes } from './../../api';
import { buildUrl } from './../../helpers';

const Container = styled.main`
  margin-top: 165px;
  flex: 1;

  @media (min-width: 576px) {
    margin-top: 102px;
  }
`;

class List extends Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      filterBySize: null,
      sizes: [],
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    fetchShoes(this.props.match).then(state => this.setState(state));
  }

  componentWillReceiveProps({ match }) {
    fetchShoes(match).then(state => this.setState(state));
  }

  handleFilterChange(filter) {
    this.setState((state) => {
      const filterBySize = filter === state.filterBySize ? null : filter;
      return { filterBySize };
    });
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Filter
            filter={this.state.filterBySize}
            sizes={this.state.sizes}
            onClick={this.handleFilterChange}
          />
          <Row>
            {this.state.shoes
              .filter(
                ({ sizes }) =>
                  (this.state.filterBySize ? sizes.includes(this.state.filterBySize) : true),
              )
              .map(({ id, price, title, image, isSale }) => (
                <Col lg={4} md={4} sm={6} xs={12} key={id}>
                  <Shoe
                    imageSrc={image}
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
