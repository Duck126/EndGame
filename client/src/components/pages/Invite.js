import React,{Component} from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
import Inputs from "../Inputs";
import TimePicker from "../TimePicker";
import { Paper, Typography, Grid } from "@material-ui/core";
import "./PageBody.css";
import API from "../../utils/API";

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
}


class Invite extends Component{

  state = {
    users: [],
    user: firebase.auth().currentUser,

  }

  componentDidMount = () => {
    this.getUsersCurrentlyOnline()

  }



  getUsersCurrentlyOnline = () => {
    API.getUsers({"isSignedIn":true})
    .then(res => this.setState({users:res.data, user:firebase.auth().currentUser}))
    .then(console.log("These are the users on line",this.state.users))
    .catch(err => console.log(err));
  }


  render(){
    return(
      <div className='page-body'>
      <Paper style={styles.Paper}>
        {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
        <Typography variant='Title'>
        <img alt="user" width="50px" margin='5px'src={firebase.auth().currentUser.photoURL} />
          Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography> 
        <br />
  
          <Typography variant='display1'>Invite</Typography>
      </Paper>
      <br />
  
  
     <FriendsList />
  
    </div>
  
    )
  }

}

export default Invite;
