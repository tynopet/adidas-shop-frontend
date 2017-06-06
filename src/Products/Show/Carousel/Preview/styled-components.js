import styled from 'styled-components';

export const Image = styled.img`
  width: 62px;
  height: 50px;
  object-fit: cover;

  @media (min-width: 576px) {
    width: auto;
    height: auto;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: solid 5px ${props => (props.isSelected ? '#e8e8ea' : 'transparent')};
  background-color: transparent;
  display: flex;
  padding: 0;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    margin-right: 15px;
  }
`;
