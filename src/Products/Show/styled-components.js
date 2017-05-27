import styled from 'styled-components';
import Label from './../Label';

export const StyledLabel = styled(Label)`
  position: static;
  
  @media (min-width: 576px) {
    position: absolute;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BuyButton = styled.button`
  background-image: linear-gradient(to right, ${props => props.color}, #27275d);
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 20px;
  font-weight: bold;
  padding-top: 34px;
  padding-bottom: 36px;
  position: fixed;
  bottom: 0;
  left: 0;
  text-transform: uppercase;
  width: 100vw;

  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    left: 414px;
    font-size: 32px;
    width: calc(100% - 414px);
  }  
`;

export const ColorButton = styled.button`
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

export const ColorsWrapper = styled.span`
  @media (min-width: 576px) {
    position: absolute;
    right: 142px;
    top: 0;
    padding: 7px 0;
  }
`;

export const Container = styled.main`
  margin-bottom: 115px;
  margin-top: 94px;
  flex: 1;

  @media (min-width: 576px) {
    margin-top: 0;
  }
`;

export const Description = styled.p`
  font-family: AvenirNext;
  font-size: 33px;
  font-weight: 500;
  color: #d8d8d8;
`;

export const FirstWord = styled.span`
  color: #6e6e6e;
`;

export const Model = styled.h1`
  color: #3a3a3a;
  font-family: AvenirNextBold;
  font-size: 36px;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  position: static;
  left: 0;
  top: 0;
  width: auto;

  @media (min-width: 576px) {
    font-size: 64px;
    width: 226px;
    position: absolute;
  }
`;

export const Preview = styled.img`
  width: calc(100vw - 4rem);
  height: 250px;
  object-fit: contain;

  @media (min-width: 576px) {
    width: 804px;
    height: 525px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 25px;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const Price = styled.h2`
  color: #e2e2e2;
  font-family: AvenirNextBold;
  font-size: 80px;
  font-weight: bold;
  margin: 0;

  @media (min-width: 576px) {
    position: absolute;
    right: 0;
    top: 48px;
  }
`;

export const SaveButton = styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 156px;
  height: 75px;
  width: 75px;
  display: none;

  &:focus {
    outline: none;
  }

  @media (min-width: 576px) {
    display: inline;
  }
`;
