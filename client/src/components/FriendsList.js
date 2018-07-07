import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InviteButton from './InviteButton';
import List from '@material-ui/core/List';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FriendsListItem from './FriendListItem';
import TextField from '@material-ui/core/TextField';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto'  }
  
}

function FriendsList (props){
  //users = props.liveUsers;
  // const users = props.liveUsers;
  //["0"].date
  let users = props.users;
  //console.log(users, "FriendsList Users");
  
    return (
      
    <div className='page-body'> 
      <Paper style={styles.Paper}>
        <Typography variant="title">
            Your Available Friends:
        </Typography>
            <div className=/*{classes.demo}*/'valueD'>
                  <List className='valueK'>
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
                 </form>
                  </div>
          <InviteButton />
      </Paper>
    </div>
    )
}

export default FriendsList;