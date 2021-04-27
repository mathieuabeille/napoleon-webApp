import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

import Home from './pages/home'
import Growth from './pages/growth'
import datasReducer from './reducers/index.js';

import NavBar from './components/navbar'


const reducers = combineReducers({
  datas: datasReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers,{},middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Home}  />
        <Route path="/growth" component={Growth}  />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

