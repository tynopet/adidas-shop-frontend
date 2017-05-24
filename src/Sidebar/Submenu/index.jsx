import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmenuContainer, SubmenuTitle, SubmenuWrapper } from './styled-components';

class Submenu extends Component {
  constructor() {
    super();
    this.state = {
      opened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { title, children } = this.props;
    return (
      <SubmenuContainer>
        <SubmenuTitle onClick={this.handleClick}>{title}</SubmenuTitle>
        <SubmenuWrapper opened={this.state.opened}>
          {children}
        </SubmenuWrapper>
      </SubmenuContainer>
    );
  }
}

Submenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Submenu;
