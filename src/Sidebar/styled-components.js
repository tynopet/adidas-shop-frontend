import styled from 'styled-components';

export const Container = styled.aside`
  min-width: 414px;
  background-color: #0e0e0e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: AvenirNextBold;
  font-size: 24px;

  @media (max-width: 575px) {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 64px;
    min-height: 64px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-right: 15px;

  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 575px) {
    display: ${props => (props.isOpened ? 'flex' : 'none')};
    position: fixed;
    top: 63px;
    z-index: 2;
    width: 100vw;
    height: calc(100vh - 63px);
    background-color: #0e0e0e;
    margin-top: 0;
    justify-content: flex-start;
    padding-top: 100px;
  }
`;
