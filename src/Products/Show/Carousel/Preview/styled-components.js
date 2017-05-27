import styled from 'styled-components';

export const Image = styled.img`
  width: 62px;
  height: 50px;

  @media (min-width: 576px) {
    width: auto;
    height: auto;
    object-fit: contain;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: ${props => (props.isSelected ? 'solid 5px #e8e8ea' : 'none')};
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
