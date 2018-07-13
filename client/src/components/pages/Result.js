import React, {Component} from "react";
import firebase from "firebase";
import { Paper, Typography } from '@material-ui/core';
import  Map from "./../maps/map.js";
import './PageBody.css';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import { Marker } from "react-google-maps";
// import SvgIcon from '@material-ui/core/SvgIcon';




const styles = {
  Paper: { padding: 20, width: "100vw", margin: 'auto' },
  Map: { width: "100vw", margin: 'auto' },
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      center: {
        lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
        lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
      },
      isSignedIn: true,
      user: firebase.auth().currentUser,
      }
  }

  //Bounds: is the area that good maps will search for in that area
  //Viewport: part of geocoding services 



render (){
  if(this.state.center.lat===null && this.state.center.lng===null){
    return(
      <div className='page-body'>
  
      <Paper style={styles.Paper}>

        {/* <Typography variant='title'>
          <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
          Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography>  */}
        <br />

        <Typography variant='display1'>There is nothing to show here</Typography>
      </Paper>

      <br />

      {/* <h1 style={styles.Map}>There is nothing to show here</h1> */}

    </div>
    ) 
  } else {
    return (
      <div 
      // className='page-body'
      >
  
          <Paper style={styles.Paper}>
  
            {/* <Typography variant='title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
              Welcome {firebase.auth().currentUser.displayName}! You are signed in.
            </Typography> 
            <br /> */}
  
            <Typography variant='display1'>Result</Typography>

          </Paper>
  
          <br/>
  
          <Map center={this.state.center} style={styles.Map}>
            
              {this.state.markers.map((marker, index)=>
              <Marker key={index}  position={marker.position} />)}
          </Map>
      </div>
      )
    }
  }
}

export default Result;