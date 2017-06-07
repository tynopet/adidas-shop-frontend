import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  padding: 11px 2rem;
  position: fixed;
  border-bottom: 3px solid #e7e7e7;
  background-color: #fff;
  z-index: 1;

  width: 100vw;
  top: 64px;
  left: 0;
  flex-direction: column;

  @media (min-width: 768px) {
    width: calc(100% - 327px);
    top: 0;
    left: 327px;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 414px);
    left: 414px;
  }
`;

export const Image = styled.img`
  background-color: #ebebeb;
  margin-right: 30px;
  padding: 11px 8px;
  display: none;

  @media (min-width: 576px) {
    display: block;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  color: ${props => (props.isSelected ? '#4d42f8' : '#d6d6d6')};
  cursor: pointer;
  padding: 0;
  margin-right: ${props => (props.isGender ? '10px' : '5px')};

  &:focus {
    outline: none;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 576px) {
    margin-right: 10px;
  }

  @media (min-width: 1024px) {
    &:hover {
      color: #4d42f8;
    }
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0;
  position: relative;
`;

export const SizeTitle = styled.span`
  color: #4d42f8;
  margin-right: 18px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: ${props => (props.isShow ? 'flex' : 'none')};
  flex-wrap: wrap;
  position: absolute;
  top: 3rem;
  left: 0px;
  background-color: #fff;
  border: 5px solid #f4f4f4;
  padding: 1rem;
  width: calc(100% - 5rem);
`;
