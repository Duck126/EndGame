import React, { Component } from "react";
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
      return (
          <div className='page-body'>
            <Grid container spacing={24}> 
            <Grid item xs={12}> 
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

            </Grid>
          </div>
        )
      }
  }


export default Invite;