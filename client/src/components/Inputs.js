import React from 'react';
import TextField from '@material-ui/core/TextField';



export default props =>

    <div className='inputFields'>

      <TextField
          id="name"
          label="Name"
          className=/*{classes.textField}*/ 'valueB'
          value=/*{this.state.name}*/ ''
          onChange=/*{this.handleChange('name')}*/ 'valueF'
          margin="normal"
        />

       <TextField
          id="password-input"
          label="Password"
          className=/*{classes.textField}*/ 'valueC'
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

    </div>

