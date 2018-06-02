import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
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

  forEach(tags){
    if (!tags) {
      tags = [{name:"notes"}];
    }
    var tagList = tags.map(function(item,key) {
      return (
        <div className="card-bottom-tag" key={key}>{item.name}</div>
      );
    });
    return tagList;
  }

  onCardClick(props) {
    this.props.callback(props.data);
  }

  render() {
    return (
        <div className="card" onClick={(e)=>this.onCardClick(this.props)}>
          <div className="card-top">
            <span className="card-title">
              {this.props.data.name}
            </span>
            <div className="card-attachments">
              <i className={this.isAttached("image")}>insert_photo</i>
              <i className={this.isAttached("video")}>play_arrow</i>
              <i className={this.isAttached("file")}>attach_file</i>
            </div>
          </div>

          <div className="card-content">
            <div className="card-description">
              {this.props.data.description}
            </div>
          </div>

          <div className="card-bottom">
            {this.forEach(this.props.data.tags)}
          </div>
        </div>
    );
  }
}
