import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header.jsx';
import Content from '../components/content/content.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      view:'list'
    }
    this.callbackFunction= this.callbackFunction.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Header view={this.state.view} callback={this.callbackFunction}/>
        <Content view={this.state.view} callback={this.callbackFunction}/>
      </div>
    );
  }

  callbackFunction(data) {
    this.setState({view:data});
  }
}
