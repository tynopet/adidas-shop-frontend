import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
  text-decoration: none;
  border-top: 6px solid #f4f4f4;
  border-left: 9px solid #f4f4f4;
  border-right: 8px solid #f4f4f4;
  border-bottom: 9px solid #f4f4f4;
`;

export const Price = styled.span`
  background-image: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : 'none')};
  background-color: ${props => (props.isSale ? 'none' : '#fff')};
  border-top: 8px solid #f4f4f4;
  color: ${props => (props.isSale ? '#fff' : '#0d0d0d')};
  cursor: pointer;
  font-family: AvenirNextBold;
  font-size: 30px;
  padding: 23px 0 27px 0;
  text-decoration: none;
  text-align: center;
`;
