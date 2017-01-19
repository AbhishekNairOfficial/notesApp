import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

export default class Header extends Component {
  handleSave = this.handleSave.bind(this);
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
  render() {
    return (
      <header className="header">
          <h1>Todos</h1>
          <TodoTextInput newTodo={true}
                         onSave={::this.handleSave}
                         placeholder="What needs to be done?" />
      </header>
    );
  }
}
if (__DEV__) {
  // Not needed or used in minified mode
  Header.propTypes = {
    addTodo: PropTypes.func.isRequired
  };
}
