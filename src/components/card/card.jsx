import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="card">
          <div className="card-top">
            <div className="card-attachments">
              <i className={this.isAttached("image")}>insert_photo</i>
              <i className={this.isAttached("video")}>play_arrow</i>
              <i className={this.isAttached("file")}>attach_file</i>
            </div>
          </div>

          <div className="card-content">
            <span className="card-title">
              {this.props.data.name}
            </span>
            <div className="card-description">
              {this.props.data.description}
            </div>
          </div>

          <div className="card-bottom"></div>
        </div>
    );
  }

  isAttached(type) {
    switch (type) {
    case "image":
      if (this.props.data.image) {
        return "material-icons";
      } else {
        return "material-icons greyed";
      }
      break;
    case "video":
      if (this.props.data.video) {
        return "material-icons";
      } else {
        return "material-icons greyed";
      }
      break;
    case "file":
    if (this.props.data.file) {
        return "material-icons";
      } else {
        return "material-icons greyed";
      }
}
  }
}
