import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import Shoes from '../Shoes';
import Details from '../Details';

const AppWrapper = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Sidebar />
          <Route exact path="/" component={Shoes} />
          <Route path="/item" component={Details} />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
