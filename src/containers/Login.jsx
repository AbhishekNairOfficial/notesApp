import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
      </div>
    );
  }
}

export default connect(state => ({ credentials: state.credentials }), dispatch => ({ credentialsActions: bindActionCreators(CredentialsActions, dispatch) }))(Login);
