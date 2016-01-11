import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
//import createHashHistory from 'history/lib/createHashHistory';
import createHistory from 'history/lib/createBrowserHistory';
import App from './App';
import HomePage from './HomePage';
import CaseStudiesPage from './CaseStudiesPage';
import NotFoundPage from './NotFoundPage';
import './navbar.css';

var history = createHistory();
render(
  (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="home" component={HomePage} />
        <Route path="casestudies" component={CaseStudiesPage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
