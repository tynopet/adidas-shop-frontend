import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, SizeWrapper, SizeTitle, Button, ModalWrapper } from './styled-components';
import filterIcon from './filter.png';
import { calcFilterLength, sortObjectByKeys } from './../../../helpers';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSizes: false,
    };
    this.handleShowClick = this.handleShowClick.bind(this);
  }

  handleShowClick() {
    this.setState(state => ({ showSizes: !state.showSizes }));
  }

  render() {
    return (
      <Container>
        <Image src={filterIcon} alt="filter" />
        <SizeWrapper>
          <SizeTitle>SIZE</SizeTitle>
          {Object.entries(sortObjectByKeys(this.props.sizes))
            .slice(0, calcFilterLength())
            .map(([size, isSelected]) => (
              <Button
                type="button"
                key={size}
                onClick={() => this.props.onClick(size)}
                isSelected={isSelected}
              >
                {size}
              </Button>
          ))}
          {Object.keys(this.props.sizes).length > calcFilterLength() && <Button type="button" onClick={this.handleShowClick}>{'>>'}</Button>}
          <ModalWrapper isShow={this.state.showSizes}>
            {Object.entries(sortObjectByKeys(this.props.sizes))
              .slice(calcFilterLength())
              .map(([size, isSelected]) => (
                <Button
                  type="button"
                  key={size}
                  onClick={() => this.props.onClick(size)}
                  isSelected={isSelected}
                >
                  {size}
                </Button>
            ))}
          </ModalWrapper>
        </SizeWrapper>
      </Container>
    );
  }
}

Filter.propTypes = {
  sizes: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  filter: null,
};

export default Filter;
