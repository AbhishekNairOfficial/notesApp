import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftIcon: 'menu',
      rightIcon: 'search',
      view:this.props.view
    }
    this.onBackClick = this.onBackClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view == "edit") {
      this.setState({view:'edit',leftIcon:'chevron_left',rightIcon:''});
    } else if (nextProps.view == "list") {
      this.setState({view:'list',leftIcon:'menu',rightIcon:'search'});
    }
  }

  render() {
    return (
      <div className="header">
        <i className="material-icons" onClick={this.onBackClick}>{this.state.leftIcon}</i>
        <span className="title">Notes</span>
        <i className="material-icons">{this.state.rightIcon}</i>
      </div>
    );
  }

  onBackClick() {
    if (this.state.view = 'edit') {
      this.props.callback("list");
    }
  }
}
