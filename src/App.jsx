import { Switch, Route, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import HelloWorld from './components/hello-world';
import Home from './components/home';

@withRouter
@inject('store')
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, this.props);
  }

  render() {
    document.title = this.store.common.title;
    return (
      <div>
        <DevTools />
        <Switch>
          <Route exact path="/" component={HelloWorld} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
