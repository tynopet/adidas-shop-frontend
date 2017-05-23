import styled from 'styled-components';
import dropdownIcon from './dropdown.svg';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const Title = styled.span`
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-weight: bold;
  position: relative;
  margin-bottom: 15px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;

  &::before {
    background-image: url(${dropdownIcon});
    content: '';
    display: block;
    position: absolute;
    height: 9px;
    width: 14px;
    right: -20px;
    top: 10px;
    transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
  }
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
