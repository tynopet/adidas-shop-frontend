import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import List from '../Products/List';
import Show from '../Products/Show';

const AppWrapper = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Sidebar />
          <Route exact path="/" component={List} />
          <Route path="/item" component={Show} />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
