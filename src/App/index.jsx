import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import List from '../Products/List';
import Show from '../Products/Show';

const AppWrapper = styled.div`
  display: flex;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

const App = () => (
  <Router>
    <AppWrapper>
      <Sidebar />
      <Switch>
        <Route exact path="/products/:category/:group" component={List} />
        <Route path="/products/:category/:group/:id" component={Show} />
        <Redirect from="/" to="/products/football/shoes" />
      </Switch>
    </AppWrapper>
  </Router>
);

export default App;
