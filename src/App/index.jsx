import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import List from '../Products/List';
import Show from '../Products/Show';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <Router>
        <AppWrapper>
          <Sidebar onChange={this.handleSearchChange} />
          <Switch>
            <Route
              exact
              path="/products/:category/:group"
              render={defaultProps => (<List
                search={this.state.search}
                {...defaultProps}
              />)}
            />
            <Route path="/products/:category/:group/:id" component={Show} />
            <Redirect from="/" to="/products/football/accessories" />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
