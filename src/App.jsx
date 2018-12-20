import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';
import Home from './components/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/home" component={Home} />
      </Switch>
    );
  }
}

export default hot(module)(App);
