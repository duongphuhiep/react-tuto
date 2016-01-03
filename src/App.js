import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/casestudies">Case Studiess</Link></li>
          </ul>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}