import React from 'react';
import styled from 'styled-components';
import dropdownIcon from './dropdown.svg';

const SubmenuWrapper = styled.nav`
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

export default ({ children, title }) => (
  <SubmenuWrapper>
    <SubmenuTitle>{title}</SubmenuTitle>
    <Submenu>
      {children}
    </Submenu>
  </SubmenuWrapper>
);