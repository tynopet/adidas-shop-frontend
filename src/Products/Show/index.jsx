import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import {
  BuyButton,
  ColorButton,
  Container,
  ColorsWrapper,
  Column,
  Description,
  FlexContainer,
  Model,
  Preview,
  Wrapper,
  Price,
  SaveButton,
  StyledLabel as Label,
} from './styled';
import { fetchShoe } from './../../api';
import { buildStaticUrl } from './../../helpers';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

class Show extends Component {
  constructor() {
    super();
    this.state = {
      colorIdx: 0,
      previewIdx: 0,
      title: '',
      description: '',
      images: [],
      price: 0,
    };
    this.handleColorClick = this.handleColorClick.bind(this);
    this.handleCarouselClick = this.handleCarouselClick.bind(this);
  }

  componentDidMount() {
    fetchShoe(this.props.match)
      .then(res => this.setState(res));
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
        <Wrapper>
          <Column>
            <Model>{this.state.title}</Model>
            <SaveButton color={colors[this.state.colorIdx]}>SAVE</SaveButton>
          </Column>
          <Price>${this.state.price}</Price>
          <FlexContainer>
            <Label isShow>SALE</Label>
            <ColorsWrapper>
              {colors.map((color, id) => (
                <ColorButton
                  onClick={() => this.handleColorClick(id)}
                  color={color}
                  key={color}
                />
              ))}
            </ColorsWrapper>
          </FlexContainer>
          {this.state.images.length && <Preview
            src={buildStaticUrl(this.state.images[this.state.previewIdx], 768)}
            alt={this.state.title}
          />}
        </Wrapper>
        {this.state.images.length && <Carousel
          images={this.state.images}
          onClick={this.handleCarouselClick}
          selected={this.state.previewIdx}
        />}
        <Description>{this.state.description}</Description>
        <BuyButton color={colors[this.state.colorIdx]}>buy now</BuyButton>
      </Container>
    );
  }
}

Show.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default Show;
