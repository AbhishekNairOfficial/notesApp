import React, { Component } from 'react';
import Card from '../../card/card.jsx';
import {MuiThemeProvider, withStyles, createStyleSheet} from 'material-ui/styles';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class List extends Component {


  constructor(props) {
      super(props);

      this.state = {
        selectedData : [],
      }
      this.onAddButtonClick = this.props.onAddButtonClick;
      this.onCardClick = this.onCardClick.bind(this);
  }


  render() {
    this.listItems = this.props.items.map((item,key) => {
      return (
        <div key={key}>
          <Card callback={this.onCardClick} data={item} />
          <hr className="card-bottom-line"/>
        </div>
      );
    });
    return (
      <div className="content">
        <div className="sticky-add-btn">
          <MuiThemeProvider>
            <FloatingActionButton zDepth={4} backgroundColor="#46b5ff">
              <ContentAdd
                onClick={this.props.onAddButtonClick}
              />
            </FloatingActionButton>
          </MuiThemeProvider>
        </div>
        <div className="card-container">
          {this.listItems}
        </div>
      </div>
    );
  }

  onCardClick(data) {
    this.props.callback(data);
  }

}
