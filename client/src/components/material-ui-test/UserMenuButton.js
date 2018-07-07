import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import firebase from "firebase";
import Avatar from '@material-ui/core/Avatar';

const iconsStyle ={
    color: 'black',
    size: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const styles = {
 
    bigAvatar: {
      width: 60,
      height: 60,
    },
  };

  function User(props){
    return (
      <div >
        <Avatar alt="User" src={firebase.auth().currentUser.photoURL} style={styles} />
      </div>
    )
  }

class UserMenuButton extends Component {
    state = {
        anchorEl:null,
    };
    
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const {anchorEl} = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    variant="fab"
                    style={{margin:2, alignContent:'center' }} 
                    aria-label="edit"
                    className="active nav-link"
                >
                    <User style={iconsStyle} src={firebase.auth().currentUser.photoURL}/>
                </Button>
                <Menu id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>red</MenuItem>
                    <MenuItem onClick={this.handleClose}>wine</MenuItem>
                    <MenuItem onClick={this.handleClose}>success</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default UserMenuButton;