import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
  width: 64px;
  height: 64px;

  @media (min-width: 1024px) {
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

  @media (min-width: 768px) {
    margin-right: 15px;
  }
`;
