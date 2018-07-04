import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InviteButton from './InviteButton';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto'  },
  Button: { backgroundColor: '#26C6DA', width: 560 }
}

function FriendsList (props){
  //users = props.liveUsers;
  // const users = props.liveUsers;
  //["0"].date
  let users = props.users;
  console.log(users, "FriendsList Users");
  
    return (
      <Paper style={styles.Paper}>
        <Typography variant="title" className=/*{classes.title}*/'valueL'>
            Your Available Friends:
        </Typography>
            <div className=/*{classes.demo}*/'valueD'>
                  <List /*dense={dense}*/ className='valueK'>
                    <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                    <FormGroup>
                      {props.users.map((item, index ) => (
                        <FriendsListItem 
                        key = {item._id}
                        photoURL={item.photoURL}
                        userName={item.userName}
                        email={item.email}
                        online={item.isSignedIn}
                        checked={props.handleChange}
                        >
                        </FriendsListItem>
                      ))}
                    </FormGroup>
                    </FormControl>
                  </List>
                  </div>
          <InviteButton />
      </Paper>

    )
}

export default FriendsList;