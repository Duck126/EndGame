//import FriendsList from "../FriendsList";
import React, {Component} from "react";
import firebase from "firebase";
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import keys from "../../keys";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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

        {/* <Paper style={styles.Paper}>

            <Typography className='Title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL}/>
             <p>  {firebase.auth().currentUser.displayName}</p>
            </Typography> 
            <br/>
            <Map />
            <Typography variant="display1">
            </Typography>
          </Paper>

          <br />

          {/* <Map style={styles.Map}/> */}

        <br /> 

        <Map style={styles.Map}/>

      </div>
    )
  }
}
export default Home;