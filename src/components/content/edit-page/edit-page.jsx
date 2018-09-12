import React, { Component } from 'react';
import './edit-page.css';

import {MuiThemeProvider, withStyles, createStyleSheet} from 'material-ui/styles';
import TextField from 'material-ui/TextField';


export default class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue :'',
    }
  }
  
  componentDidMount() {
    this.setState({textValue:this.props.data.description});
  }


  render() {
    return (
      <div className="content edit-page">

        <div className="edit-block edit-body">
          <MuiThemeProvider>
            <TextField
              hintText={'Start writing..'}
              value={this.state.textValue}
              onChange={(e,value)=>this.setState({textValue:value})}
              underlineShow = {false}
              fullWidth = {true}
              className="note-body-text"
              multiLine = {true}
            />
          </MuiThemeProvider>
        </div>

      </div>
    );
  }
}
