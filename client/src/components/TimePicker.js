import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = {
  Paper: { padding: 20, width: 600, align: "center" },
  }


export default props =>

<div className='page-body'> 

  <Paper style={styles.Paper}>
    <form className=/*{classes.container} noValidate*/ 'valueS'>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className=/*{classes.textField}*/ 'valueP'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <br />
   </Paper>  
</div>     

