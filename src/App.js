import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import classNames from 'classnames';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
  };
  toogleNavBar() {
    this.setState({drawerOpen: !this.state.drawerOpen});
  };
  render() {
    return (
      <div className={classNames("app-container", {"drawer-open": this.state.drawerOpen})}>
        <nav className="app-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/casestudies">Case Studiess</Link></li>
          </ul>
        </nav>
        <div className="inner-wrapper">
          <header className="app-header">
            <button onClick={this.toogleNavBar.bind(this)}>Toogle</button>
          </header>
          <div className="app-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}