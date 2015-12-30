import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
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
    );
  }
}