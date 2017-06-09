import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, SizeWrapper, SizeTitle, Button, ModalWrapper } from './styled';
import filterIcon from './filter.png';
import { calcFilterLength, sortFilter, isShowExpander } from './../../../helpers';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSizes: false,
    };
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  handleDropdownClick() {
    this.setState(prevState => ({ showSizes: !prevState.showSizes }));
  }

  render() {
    return (
      <Container>
        <Image src={filterIcon} alt="filter" />
        <SizeWrapper>
          <SizeTitle>SIZE</SizeTitle>
          {sortFilter(this.props.sizes)
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
          {isShowExpander(this.props.sizes) && <Button type="button" onClick={this.handleDropdownClick}>{'>>'}</Button>}
          <ModalWrapper isShow={this.state.showSizes}>
            {sortFilter(this.props.sizes)
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
