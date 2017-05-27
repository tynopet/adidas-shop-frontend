import React from 'react';
import styled from 'styled-components';
import searchIcon from './search.svg';

const SearchWrapper = styled.div`
  position: relative;
  display: none;

  &::before {
    content: '';
    display: block;
    background-image: url(${searchIcon});
    width: 28px;
    height: 30px;
    position: absolute;
    left: 23px;
    top: 10px;
  }

  @media (min-width: 576px) {
    display: block;
  }
`;

const SearchInput = styled.input`
  border: none;
  font-family: AvenirNextBold;
  font-size: 24px;
  background-color: #0e0e0e;
  margin: 0 22px;
  color: #fff;
  height: 30px;
  width: calc(100% - 79px);
  border-bottom: 4px solid #373737;
  padding: 10px 0 10px 35px;

  &:focus {
    outline: none;
    border-bottom: 4px solid #fff;
  }
`;

export default () => (
  <SearchWrapper>
    <SearchInput type="text" />
  </SearchWrapper>
);
