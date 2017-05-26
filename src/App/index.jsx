import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import List from '../Products/List';
import Show from '../Products/Show';

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => (
  <Router>
    <AppWrapper>
      <Sidebar />
      <Route exact path="/" render={() => <Redirect to="/products/football/shoes" />} />
      <Route exact path="/products/:category/:group" component={List} />
      <Route path="/products/:category/:group/:id" component={Show} />
    </AppWrapper>
  </Router>
);

export default App;
