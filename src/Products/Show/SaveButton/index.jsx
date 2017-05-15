import React from 'react';
import styled from 'styled-components';

const SaveButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 156px;
  height: 75px;
  width: 75px;

  &:focus {
    outline: none;
  }
`;

export default () => <SaveButton>SAVE</SaveButton>;
