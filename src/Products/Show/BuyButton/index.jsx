import React from 'react';
import styled from 'styled-components';

const BuyButton = styled.button`
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 32px;
  font-weight: bold;
  padding-top: 34px;
  padding-bottom: 36px;
  position: fixed;
  bottom: 0;
  left: 414px;
  width: calc(100% - 414px);

  &:focus {
    outline: none;
  }
`;

export default () => <BuyButton>BUY NOW</BuyButton>;
