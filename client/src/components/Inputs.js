import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  }


class Inputs extends Component{

  render() {
    return(

        <Paper style={styles.Paper}>

        <TextField
          id="multiline-flexible"
          label="Invite Friends by Entering their Email"
          multiline
          rowsMax="6"
          value=/*{this.state.multiline}*/ ''
          onChange=/*{this.handleChange('multiline')}*/ 'l'
          className=/*{classes.textField}*/ 'm'
          margin="normal"
        />
        </Paper>

    )
  }
}

export default Inputs;

