import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    let profileBlocks=[];

    //let styl = {display:'block', float:'left', height:"200px"};

    for (let i = 0; i<20; i++) {
      profileBlocks.push(
        <div key={i}>
          <img src='assets/avatar.jpg' />
          <ul>
            <li>Name: Profile {i}</li>
            <li>Age: {i}</li>
            <li>Status: Normal</li>
          </ul>
        </div>
      )
    }

    return (
      <div>
        <h1>Home page</h1>
        {profileBlocks}
      </div>
    );
  }
}
