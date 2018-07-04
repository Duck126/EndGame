import React from "react";
import firebase from "firebase";
import FriendsList from "../FriendsList";
import { Paper, Typography } from "@material-ui/core";
import "./PageBody.css";


const styles = {
  Paper: { padding: 20, width: 600 },
  FriendsList: { padding: 20, width: 600 }
}

const Invite = () =>
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
            </Grid>
            <br />
            <Grid item xs={12}>
              <TimePicker />    
            </Grid>
            <br />
            <Grid item xs={12}>
            <FriendsList 
              users = {this.state.liveUsers}
              handleChange = {this.state.handleChange}/>
            </Grid>


   <FriendsList />

  </div>;


  

export default Invite;
