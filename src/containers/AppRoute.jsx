import React, { Component, PropTypes } from 'react';
import Router, { Route, Redirect } from 'react-router';
import { createHistory } from 'history';
import Login from './Login.jsx';
import TodoApp from './TodoApp.jsx';

export default class AppRoute extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  };
    return {
      isLoggedIn: false
    };
  }
