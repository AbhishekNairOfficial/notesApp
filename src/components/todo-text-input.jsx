import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  static defaultProps = {
    defaultText: '',
    placeholder: '',
    editing: false,
    newTodo: true
  };
  componentWillMount() {
    this.state = {
      text: this.props.defaultText
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    const { placeholder, editing, newTodo } = this.props;
    const { text } = this.state;

    return (
             type="text"
             placeholder={this.props.placeholder}
             autoFocus="true"
             value={this.state.text}
             onBlur={::this.handleBlur}
             onChange={::this.handleChange}
             onKeyDown={::this.handleSubmit} />
    );
