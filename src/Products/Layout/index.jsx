import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Container = styled.main`
  width: 100%;
`;

const Layout = ({ children }) => (
  <Container>
    <Grid fluid>
      {children}
    </Grid>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
