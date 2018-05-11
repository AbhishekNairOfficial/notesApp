import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <i className="material-icons">menu</i>
        <span className="title">Notes</span>
        <i className="material-icons">search</i>
      </div>
    );
  }
}
