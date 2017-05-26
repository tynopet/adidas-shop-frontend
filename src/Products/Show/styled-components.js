import styled from 'styled-components';

export const BuyButton = styled.button`
  background-image: linear-gradient(to right, ${props => props.color}, #27275d);
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 32px;
  font-weight: bold;
  padding-top: 34px;
  padding-bottom: 36px;
  position: fixed;
  bottom: 0;
  left: 414px;
  text-transform: uppercase;
  width: calc(100% - 414px);

  &:focus {
    outline: none;
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
  padding: 7px 0;
  position: absolute;
  right: 142px;
  top: 0;
`;

export const Container = styled.main`
  margin-bottom: 115px;
  flex: 1;
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
  font-size: 64px;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 226px;
`;

export const Preview = styled.img`
  width: 804px;
  height: 525px;
  object-fit: contain;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 25px;
`;

export const Price = styled.h2`
  color: #e2e2e2;
  font-family: AvenirNextBold;
  font-size: 80px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  right: 0;
  top: 48px;
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

  &:focus {
    outline: none;
  }
`;
