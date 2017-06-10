import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #0e0e0e;
  display: flex;
  font-family: AvenirNextBold;
  font-size: 24px;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 64px;
  min-height: 64px;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    position: static;
    justify-content: flex-start;
    min-width: 327px;
    width: 327px;
  }

  @media (min-width: 1024px) {
    min-width: 414px;
    width: 414px;
  }
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-right: 25px;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: ${props => (props.isOpened ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  align-items: center;
  top: 63px;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 63px);
  background-color: #0e0e0e;
  margin-top: 0;
  justify-content: flex-start;
  padding-top: 100px;

  @media (min-width: 768px) {
    margin-top: 150px;
    display: flex;
    justify-content: center;
    position: static;
    width: auto;
    height: auto;
    padding-top: 0;
  }
`;
