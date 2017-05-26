import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  border: ${props => (props.selected ? 'solid 5px #e8e8ea' : 'none')};
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export default Button;
