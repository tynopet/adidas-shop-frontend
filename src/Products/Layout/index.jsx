import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const MainWrapper = styled.main`
  flex-grow: 1;
  margin-top: ${props => (props.isList ? '102px' : '0')};
  margin-bottom: ${props => (props.isShow ? '115px' : '0')}
`;

const Layout = ({ isList, isShow, children }) => (
  <MainWrapper isList={isList} isShow={isShow}>
    <Grid fluid>
      {children}
    </Grid>
  </MainWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isList: PropTypes.bool,
  isShow: PropTypes.bool,
};

Layout.defaultProps = {
  isList: false,
  isShow: false,
};

export default Layout;
