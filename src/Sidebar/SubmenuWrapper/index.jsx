import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dropdownIcon from './dropdown.svg';

const SubmenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 21px;
`;

const SubmenuTitle = styled.span`
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-weight: bold;
  position: relative;
  margin-bottom: 15px;
  text-decoration: none;

  &::before {
    background-image: url(${dropdownIcon});
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 14px;
    right: -20px;
    top: 10px;
  }
`;

const Submenu = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmenuWrapper = ({ children, title }) => (
  <SubmenuContainer>
    <SubmenuTitle>{title}</SubmenuTitle>
    <Submenu>
      {children}
    </Submenu>
  </SubmenuContainer>
);

SubmenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubmenuWrapper;
