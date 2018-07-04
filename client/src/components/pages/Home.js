import React, {Component} from "react";
import firebase from "firebase";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import keys from "../../keys";
import { Paper, Typography } from '@material-ui/core';
import  Map from "./../maps/map.js";
import './PageBody.css';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
};

class Home extends Component {

  render (){
    return (
      <div className='page-body'>

          <Paper style={styles.Paper}>

            <Typography className='Title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL}/>
             <p> Welcome {firebase.auth().currentUser.displayName}! You are signed in.</p>
            </Typography> 
            <br />

            { <Typography variant="display1"></Typography> }
          </Paper>

          <br />

          <Map style={styles.Map}/>

      </div>
    )
  }
}
export default Home;