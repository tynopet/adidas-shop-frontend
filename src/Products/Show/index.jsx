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
  PreviewWrapper,
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
      color: localStorage.getItem('color') || '#c5c5c5',
      preview: 1,
    };
    this.handleColorClick = this.handleColorClick.bind(this);
    this.handlePrewievClick = this.handlePrewievClick.bind(this);
  }

  handleColorClick(color) {
    this.setState({ color });
    localStorage.setItem('color', color);
  }

  handlePrewievClick(id) {
    this.setState({ preview: id });
  }

  renderPrewiew() {
    const image = images.find(img => img.id === this.state.preview);
    return (<Preview src={image.src} alt={image.alt} />);
  }

  render() {
    return (
      <Container>
        <Grid fluid>
          <Row>
            <Col lg={12}>
              <PreviewWrapper>
                <Model>ULTRA BOOST</Model>
                <SaveButton color={this.state.color}>SAVE</SaveButton>
                <ColorsWrapper>
                  {colors.map(color => (
                    <ColorButton
                      onClick={() => this.handleColorClick(color)}
                      color={color}
                      key={color}
                    />
                  ))}
                </ColorsWrapper>
                <Label isShow>SALE</Label>
                <Price>$170</Price>
                {this.renderPrewiew()}
              </PreviewWrapper>
            </Col>
          </Row>
          <Carousel images={images} onClick={this.handlePrewievClick} selected={this.state.preview} />
          <Description>
            <FirstWord>Adidas</FirstWord> is a German multinational corporation,<br />
            headquartered in Herzogenaurach, Germany, that designs <br />
            and manufactures shoes, clothing and accessories.
          </Description>
          <BuyButton color={this.state.color}>buy now</BuyButton>
        </Grid>
      </Container>
    );
  }
}

export default Show;
