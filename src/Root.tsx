import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Application from './containers/Application';
import Login from './containers/Login';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './store';

const store = createStore(
  rootReducer, 
  compose(applyMiddleware(thunk, logger))
);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={ Login }/>
            <Route path="/" name="Home" component={ Application }/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
