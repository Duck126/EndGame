import React from 'react';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';



const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  }


//export default props => {



  <Paper style={styles.Paper}>
    <Typography variant="title" className=/*{classes.title}*/'valueL'>
        Available Users:
    </Typography>
        <div className=/*{classes.demo}*/'valueD'>
              <List /*dense={dense}*/ valueK>
                <FormControl component="fieldset">
                <FormLabel component="legend">Meet UP Instance</FormLabel>
                <FormGroup>


                   <FriendsListItem />

                </FormGroup>
                </FormControl>
              </List>
        </div>
  </Paper>



/*need js logic to store the date and date from form to create instance on EndGame. 
also need to know where to get data to populate the list*/