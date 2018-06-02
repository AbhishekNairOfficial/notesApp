import React, { Component } from 'react';
import './edit-page.css';

import {MuiThemeProvider, withStyles, createStyleSheet} from 'material-ui/styles';
import TextField from 'material-ui/TextField';


export default class EditPage extends Component {

  render() {
    return (
      <div className="content edit-page">
        <div className="edit-block edit-title">
          <MuiThemeProvider>
            <TextField
              hintText={(this.data)?this.data.title:'Title'}
              underlineShow = {false}
              fullWidth = {true}
              className="note-title-text"
            />
          </MuiThemeProvider>
        </div>

        <div className="edit-block edit-body">
          <MuiThemeProvider>
            <TextField
              hintText={(this.data)?this.data.body:'Start writing..'}
              underlineShow = {false}
              fullWidth = {true}
              className="note-body-text"
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
