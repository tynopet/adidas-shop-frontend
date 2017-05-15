import styled from 'styled-components';

const Label = styled.span`
  position: absolute;
  font-size: 14px;
  padding: 6px 20px;
  color: #fff;
  font-weight: normal;
  font-family: AvenirNextBold;
  background-color: #ff5c5c;
  top: ${props => (props.isShow ? '0' : '8px')};
  right: 8px;
`;

export default Label;
