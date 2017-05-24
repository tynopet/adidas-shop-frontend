import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Wrapper } from './styled-components';

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    const { title, children } = this.props;
    return (
      <Container>
        <Button onClick={this.handleClick} isOpen={this.state.isOpen}>{title}</Button>
        {this.state.isOpen &&
          <Wrapper>
            {children}
          </Wrapper>}
      </Container>
    );
  }
}

Submenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Submenu;
