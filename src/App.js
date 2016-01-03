import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">

        {/*
        <nav className="app-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/casestudies">Case Studiess</Link></li>
          </ul>
        </nav>
        <div className="app-header"><button>Toggle</button></div>
        */}

        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text"><Link to="/home">LOGO</Link></li>
              
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/casestudies">Case Studiess</Link></li>
              <li className="has-submenu">
                <a href="#">Other</a>
                <ul className="submenu menu vertical" data-submenu>
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}