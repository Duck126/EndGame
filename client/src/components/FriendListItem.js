import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatars from './Avatars';


const styles = {
    ListItem: { background: '#FF5722', text: 'white', width: 560, padding: 10 }
}


function FriendListItem (props){ 
    return (
        <ListItem 
        style={styles.ListItem}
        key={props._id}
        >
        <ListItemAvatar>
            <Avatars
            alt={props.userName} 
            src={props.photoURL}
            >
            </Avatars>
        </ListItemAvatar>
        <ListItemText
            primary={props.userName}
            secondary={props.online} 
        />
        <FormControlLabel
        control={
            <Checkbox
            checked={props.checked}
            onChange={props.handleChange}
            value={props.email}
            />
        }
            label="Invite"
        />            
    </ListItem>
    )
}


    
     



export default FriendListItem;