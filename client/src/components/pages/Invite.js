import React, { Component } from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
import Inputs from "../Inputs";
import { Paper, Typography } from "@material-ui/core";
import "./PageBody.css";

const styles = {
  Paper: { padding: 20, width: 600 },
}

class Invite extends Component { 

  state = {
    //isSignedIn: true,
    //user: {}
  }

    render(){
      return (
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

            <br />

            <Inputs />

          </div>
        )
      }
  }
export default Invite;
