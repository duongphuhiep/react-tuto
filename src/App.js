import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import MediaQuery from 'react-responsive';
import Headroom from 'react-headroom';

export default class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minWidth={840}>
          <Headroom>
            <div className="horz-navbar">
              <Link to="/home">Home</Link>
              <Link to="/casestudies">Case Studies</Link>
            </div>
          </Headroom>
        </MediaQuery>

        <MediaQuery maxWidth={840}>
          Side navbar
          <ul className="app-container">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/casestudies">Case Studiess</Link></li>
          </ul>
        </MediaQuery>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}