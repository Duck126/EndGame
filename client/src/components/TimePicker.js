import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  }


class TimePicker extends Component {

  render(props) { 
    return ( 
        <Paper style={styles.Paper}>
          <form className=/*{classes.container} noValidate*/ 'valueS'>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              onChange={this.props.handleDate}
              defaultValue="2017-05-24T10:30"
              className=/*{classes.textField}*/ 'valueP'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <br />
        </Paper>  
      
      )   
  }
}

export default TimePicker;