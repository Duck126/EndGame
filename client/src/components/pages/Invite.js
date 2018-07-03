import React, { Component } from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
import { Paper, Typography } from "@material-ui/core";
import "./PageBody.css";
import API from "../../utils/API";

const styles = {
  Paper: { padding: 20, width: 600 },
}

class Invite extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      isSignedIn: true,
      user: {},
      value: 0,
      checked: false,
      liveUsers: [], 
    };
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked = true });
  };

  componentDidMount() {
    API.getUsers()
    .then((response)=> {
      this.setState(()=>{
        return {
          liveUsers: response.data
        }
      })
    })
    .catch(err=>console.log(err))
  }    
    
  
    render(){
      
      let users = this.state.liveUsers;
      console.log(users, "Invite JS");
      return (
        <div className='page-body'>
          <Paper style={styles.Paper}>
            {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
            <Typography variant='Title'>
              <img alt="user" width="50px" margin='5px'src={firebase.auth().currentUser.photoURL} />
              Welcome {firebase.auth().currentUser.displayName}! You are signed in.
            </Typography> 
          <br/>
            <Typography variant='display1'>Invite</Typography>
          </Paper>
          <br />
          <FriendsList
           users = {this.state.liveUsers}
           handleChange = {this.state.handleChange}
           />
          
        </div>
      )
    }
  }

export default Invite;
