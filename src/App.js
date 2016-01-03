import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <nav className="app-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/casestudies">Case Studiess</Link></li>
          </ul>
        </nav>
        <div className="app-header"><button>Toggle</button></div>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}