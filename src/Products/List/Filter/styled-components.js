import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  padding: 11px 2rem;
  position: fixed;
  top: 0;
  left: 414px;
  width: calc(100% - 414px);
  border-bottom: 3px solid #e7e7e7;
  background-color: #fff;
  z-index: 1;

  @media (max-width: 575px) {
    width: 100vw;
    top: 64px;
    left: 0;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  background-color: #ebebeb;
  margin-right: 30px;
  padding: 11px 8px;

  @media (max-width: 575px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  color: ${props => (props.selected ? '#4d42f8' : '#d6d6d6')};
  cursor: pointer;
  padding: 0;
  margin-right: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #4d42f8;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 575px) {
    margin-right: ${props => (props.isGender ? '10px' : '5px')};
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 72px;

  @media (max-width: 575px) {
    margin-left: 0;
  }
`;

export const SizeTitle = styled.span`
  color: #4d42f8;
  margin-right: 18px;
`;
