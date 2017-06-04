import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Shoe from './Shoe';
import { buildUrl, buildStaticUrl } from './../../helpers';

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
      filterBySize: '*',
      sizes: [],
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.getData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getData(nextProps);
  }

  getData({ match }) {
    fetch(`https://erodionov-adidas-fake-api.now.sh/v1${match.url}`)
      .then(res => res.json())
      .then(({ items }) => {
        const shoes = items.map(({ id, price, title, images, sizes }) => ({
          id,
          price: price / 100,
          title,
          image: buildStaticUrl(images[0], 512),
          sizes,
        }));
        const filterSizes = items
          .reduce((acc, { sizes }) => [...new Set([...acc, ...sizes])], [])
          .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
        this.setState({ shoes, sizes: filterSizes });
      });
  }

  handleFilterChange(filterBySize) {
    this.setState({ filterBySize });
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
                  (this.state.filterBySize === '*' ? true : sizes.includes(this.state.filterBySize)),
              )
              .map(({ id, price, title, image }) => (
                <Col lg={4} md={4} sm={6} xs={12} key={id}>
                  <Shoe
                    imageSrc={image}
                    imageAlt={title}
                    price={price}
                    isSale={Math.random() > 0.8}
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

export default List;
