import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';

const Layout = ({ children }) => (
  <Grid fluid>
    {children}
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
