import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Label from './../Label';
import Carousel from './Carousel';
import BuyButton from './BuyButton';
import {
  ColorButton,
  Container,
  ColorsWrapper,
  Description,
  FirstWord,
  Model,
  PrewiewWrapper,
  Price,
  SaveButton,
} from './styled-components';

class Show extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: '#c5c5c5',
      colors: ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ selectedColor: e.target.getAttribute('color') });
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <PrewiewWrapper>
                <img src="/img/bitmap-copy.jpg" alt="bitmap" />
                <Model>ULTRA BOOST</Model>
                <SaveButton color={this.state.selectedColor}>SAVE</SaveButton>
                <ColorsWrapper>
                  {this.state.colors.map(color => (
                    <ColorButton onClick={this.handleClick} color={color} key={color} />
                  ))}
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
        </Grid>
      </Container>
    );
  }
}

export default Show;
