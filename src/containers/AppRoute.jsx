import React, { Component, PropTypes } from 'react';
import Router, { Route } from 'react-router';
import { createHistory } from 'history';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';
import TodoApp from './TodoApp.jsx';

import * as GeneralActions from '../actions/GeneralActions';
import * as CredentialsActions from '../actions/CredentialsActions';

import auth from '../core/auth';

@connect(state => ({stores: state}), dispatch => ({ actions: {
  generalActions: bindActionCreators(GeneralActions, dispatch),
  credentialsActions: bindActionCreators(CredentialsActions, dispatch)
}}))
export default class AppRoute extends Component {
  static propTypes = {
    stores: PropTypes.object,
    actions: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
    const history = createHistory();
    this.state = {
      history,
      isMounted: false
    };

    const { credentialsActions } = props.actions;
    credentialsActions.checkCredentials();
    auth.loggedIn(authenticated => {
      if (authenticated) {
        credentialsActions.checkCredentialsSucess();
      } else {
        setTimeout(() => {
          credentialsActions.checkCredentialsFailure();
        });
      }
    });
  }
  componentDidMount() {
    this.props.actions.generalActions.mount();
  }
  componentDidUpdate(prevProps) {
    if (this.props.stores.credentials.authenticated !== prevProps.stores.credentials.authenticated) {
      this.state.history.pushState(null, '/');
    }
  }
  checkAuth(nextState, replaceState) {
    if (!this.props.stores.credentials.authenticated) {
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  handleRedirect(nextState, replaceState) {
    replaceState({ nextPathname: nextState.location.pathname }, this.props.stores.credentials.authenticated ? '/main' : '/login');
  }

  render() {
    const { history, isMounted } = this.state;

    return (
      <Router history={history}>
        <Route path="/main" component={TodoApp} onEnter={::this.checkAuth}/>
        <Route path="/login" isFirstRender={(!isMounted)} component={Login}/>
        <Route path="*" onEnter={::this.handleRedirect}/>
      </Router>
    );
  }
}
