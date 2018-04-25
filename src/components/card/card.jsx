import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="card">
          <span className="card-title">
            {this.props.data.name}
          </span>
          <span className="card-description">
            {this.props.data.description}
          </span>
        </div>
    );
  }
}
