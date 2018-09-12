import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/header.jsx';
import Content from '../components/content/content.jsx';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      view: 'list',
      clearNote: false
    };
    this.callbackFunction = this.callbackFunction.bind(this);
    document.addEventListener('deviceready', this.onDeviceReady(), false);
  }

  onDeviceReady() {
    const self = this;
    let key;
    let val;
    if (window.NativeStorage) {
      console.log('native storage exists!');
      
      if (val === undefined) {
        try {
          NativeStorage.remove(key, () => {
            console.log('Removed ' + key + ' from nativeStorage');
          }, () => {
            console.log('Error removing from nativeStorage');
          });
          return;
        } catch (e) {
          console.log(e);
        }
      }
      console.log('native storage exists!');
      NativeStorage.setItem(key, val, () => {
        console.log('Saved in nativeStorage');
      }, () => {
        console.log('Error in Native Storage' + self);
      });
    } else {
      console.log('illa guru');
      const storage = window.localStorage;
      if (val === undefined) {
        storage.removeItem(key);
      } else {
        storage.setItem(key, val);
      }
    }
  }

  callbackFunction(data) {
    this.setState({ view: data });
    this.state.clearNote = false;
    if (data === 'list') {
      this.state.clearNote = true;
    }
  }

  render() {
    return (
      <div className="app">
        <Header view={this.state.view} callback={this.callbackFunction} />
        <Content clear={this.state.clearNote} view={this.state.view} callback={this.callbackFunction} />
      </div>
    );
  }
}
