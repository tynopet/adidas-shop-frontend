import React from 'react';
import styled from 'styled-components';
import searchIcon from './search.svg';

const SearchWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: block;
    background-image: url(${searchIcon});
    width: 28px;
    height: 30px;
    position: absolute;
    left: 23px;
  }
`;

const SearchInput = styled.input`
  border: none;
  font-family: AvenirNextBold;
  font-size: 24px;
  background-color: #0e0e0e;
  margin: 0 22px;
  color: #3a3a3a;
  font-weight: bold;
  height: 30px;
  font-size: 24px;
  width: calc(100% - 79px);
  border-bottom: 4px solid #373737;
  padding-left: 35px;

  &:focus {
    outline: none;
  }
`;

export default () => (
  <SearchWrapper>
    <SearchInput type="text" />
  </SearchWrapper>
);
