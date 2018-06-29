import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';


const styles = {
  Paper: { padding: 20, width: 600, align: "center" },
  }


export default props =>

<div className='page-body'> 
  <Paper style={styles.Paper}>
    <Typography variant="title" className=/*{classes.title}*/'valueL'>
        Who's Online:
    </Typography>
        <div className=/*{classes.demo}*/'valueD'>
              <List /*dense={dense}*/ valueK>
                <FormControl component="fieldset">
                <FormLabel component="legend">Select:</FormLabel>
                <FormGroup>

                   <FriendsListItem />

                </FormGroup>
                </FormControl>
              </List>
        </div>
  </Paper>

</div>

/*need js logic to store the date and date from form to create instance on EndGame. 
also need to know where to get data to populate the list*/