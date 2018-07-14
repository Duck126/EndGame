import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';



const styles = {
  Paper: { padding: 20, width: "95vw", margin: 'auto', maxWidth:"600px" },
  }


class TimePicker extends Component {

  render(props) { 
    return ( 
        <Paper style={styles.Paper}>
          <form className=/*{classes.container} noValidate*/ 'valueS'>
            <TextField
              id="datetime-local"
              label="When is your group meeting up?"
              type="datetime-local"
              onChange={this.props.handleDate}
              defaultValue="2018-07-24T10:30"
              // formatDate={(date) => moment(date).format('DD-MM-YYYY')}
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