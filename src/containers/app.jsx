import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header.jsx';
import Content from '../components/content/content.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}
