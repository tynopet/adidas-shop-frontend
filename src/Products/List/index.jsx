import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import 'whatwg-fetch';
import Filter from './Filter';
import Shoe from './Shoe';

const Container = styled.main`
  margin-top: 165px;
  flex: 1;

  @media (min-width: 576px) {
    margin-top: 102px;
  }
`;

const buildStaticUrl = ({ id, fileName }, height) =>
  `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`;

const buildUrl = ({ location }, id) => `${location.pathname}/${id}`;

class List extends Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      filter: null,
      filteredShoes: [],
      filterSizes: [],
    };
    this.handleFilterClick = this.handleFilterClick.bind(this);
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
          .sort();
        this.setState({ shoes, filterSizes, filteredShoes: shoes });
      });
  }

  handleFilterClick(filter) {
    this.setState(({ shoes }) => {
      const filteredShoes = filter ? shoes.filter(({ sizes }) => sizes.includes(filter)) : shoes;
      return { filteredShoes, filter };
    });
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Filter
            filter={this.state.filter || ''}
            sizes={this.state.filterSizes}
            onClick={this.handleFilterClick}
          />
          <Row>
            {this.state.filteredShoes.map(({ id, price, title, image }) => (
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
