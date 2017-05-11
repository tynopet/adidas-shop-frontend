import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation';
import Shoes from '../Shoes';
import Details from '../Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Shoes} />
          <Route path="/item" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
