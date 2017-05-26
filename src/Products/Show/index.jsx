import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Label from './../Label';
import Carousel from './Carousel';
import {
  BuyButton,
  ColorButton,
  Container,
  ColorsWrapper,
  Description,
  FirstWord,
  Model,
  Preview,
  Wrapper,
  Price,
  SaveButton,
} from './styled-components';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];
const images = [
  {
    id: 0,
    src: '/img/bitmap.jpg',
    alt: 'shoe',
  },
  {
    id: 1,
    src: '/img/bitmap_2.jpg',
    alt: 'shoe',
  },
  {
    id: 2,
    src: '/img/bitmap_3.jpg',
    alt: 'shoe',
  },
  {
    id: 3,
    src: '/img/bitmap.jpg',
    alt: 'shoe',
  },
  {
    id: 4,
    src: '/img/bitmap_2.jpg',
    alt: 'shoe',
  },
  {
    id: 5,
    src: '/img/bitmap_3.jpg',
    alt: 'shoe',
  },
];

class Show extends Component {
  constructor() {
    super();
    this.state = {
      colorIdx: 0,
      previewIdx: 0,
    };
    this.handleColorClick = this.handleColorClick.bind(this);
    this.handleCarouselClick = this.handleCarouselClick.bind(this);
  }

  handleColorClick(colorIdx) {
    this.setState({ colorIdx });
  }

  handleCarouselClick(previewIdx) {
    this.setState({ previewIdx });
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <Wrapper>
                <Model>ULTRA BOOST</Model>
                <SaveButton color={colors[this.state.colorIdx]}>SAVE</SaveButton>
                <ColorsWrapper>
                  {colors.map((color, id) => (
                    <ColorButton
                      onClick={() => this.handleColorClick(id)}
                      color={color}
                      key={color}
                    />
                  ))}
                </ColorsWrapper>
                <Label isShow>SALE</Label>
                <Price>$170</Price>
                <Preview
                  src={images[this.state.previewIdx].src}
                  alt={images[this.state.previewIdx].alt}
                />
              </Wrapper>
            </Col>
          </Row>
          <Carousel
            images={images}
            onClick={this.handleCarouselClick}
            selected={this.state.previewIdx}
          />
          <Description>
            <FirstWord>Adidas</FirstWord> is a German multinational corporation,<br />
            headquartered in Herzogenaurach, Germany, that designs <br />
            and manufactures shoes, clothing and accessories.
          </Description>
          <BuyButton color={colors[this.state.colorIdx]}>buy now</BuyButton>
        </Grid>
      </Container>
    );
  }
}

export default Show;
