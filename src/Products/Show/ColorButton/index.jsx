import styled from 'styled-components';

const ColorButton = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.color};
  margin-right: 13px;

  &:last-child {
    margin-right: 0;
  }

  &:focus {
    outline: none;
  }
`;

export default ColorButton;
