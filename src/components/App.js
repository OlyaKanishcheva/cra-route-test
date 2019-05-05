import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Main,
  Public,
  Private1,
  Private2,
  Private3,
  Whoops404,
  Admin,
} from './pages';
import { Log } from './containers';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Log />
        </header>
        <div className='App-main'>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route path='/public' component={ Public } />
            <Route path='/private1' component={ Private1 } />
            <Route path='/private2' component={ Private2 } />
            <Route path='/private3' component={ Private3 } />
            <Route path='/admin' component={ Admin } />
            <Route component={ Whoops404 } />
          </Switch>
        </div>
      </div>
    );
  }
};

export default App;
