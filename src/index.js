import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
//import createHashHistory from 'history/lib/createHashHistory';
import createHistory from 'history/lib/createBrowserHistory';
import HomePage from './HomePage';
import CaseStudiesPage from './CaseStudiesPage';

/*const NavBar = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/casestudies">Case Studies</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});*/



var history = createHistory();
render(
  <Router history={history}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="casestudies" component={CaseStudiesPage} />
  </Router>,
  document.getElementById('root')
);
