import React, { Component }from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatars from './Avatars';


const styles = {
    ListItem: { background: '#FF5722', text: 'white' }
}


function FriendListItem (props){
   let liveUser = {liveUsers: props.liveUsers}  
    return (
        <ListItem style={styles.ListItem}>
        <ListItemAvatar>
            <Avatars
            alt="yep"//{props.} 
            src="yep"//{props.photoURL}
            >
            </Avatars>
        </ListItemAvatar>
        <ListItemText
            primary={props.liveUser.liveUsers.name}
            secondary=""//{props.online} 
        />
        <FormControlLabel
        control={
            <Checkbox
                unchecked=""//{props.checked}
                onChange=""//{props.handleChange()}
                value=""//{props.email}
            />
        }
            label="Invite"
        />            
    </ListItem>
    )
}


    
     



export default FriendListItem;