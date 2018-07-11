import React, {Component} from "react";
import firebase from "firebase";
import  Map from "./../maps/map.js";
import './PageBody.css';
import { Paper, Typography, Grid } from "@material-ui/core";
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer,} from 'react-google-maps';



const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
}

const google = window.google;

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
        lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
      },
      start: {
        lat: 0,
        lng: 0,
      },
      directions: [],
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

componentDidMount(){
  navigator.Geolocation.getCurrentPosition((location)=>{
    var start = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    }
    var center= {
      lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
      lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
    }
    this.setState({
      start: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      center: {
        lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
        lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
      },
    })
  this.directionMaker(start, center);

  });

}

directionMaker = (start, center) =>{
  const DirectionsService = new google.maps.DirectionsService();
  DirectionsService.route({
    origin: start,
    destination: center,
    travelMode: google.maps.TravelMode.DRIVING,
  }, (result, status) => {
    if ( status === google.maps.DirectionsStatus.OK) {
      this.setState({
        directions:  result
      })
    } else {
      console.log(`error fetching directions ${result, status}`)
    }
  })
}


render (){
  if(this.state.center.lat===null && this.state.center.lng===null){
    return(
      <div className='page-body'>
  
      <Paper style={styles.Paper}>

        <Typography variant='title'>
          <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
          Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography> 
        <br />

        <Typography variant='display1'>Result</Typography>
      </Paper>

      <br />

      <h1 style={styles.Map}>There is nothing to show here</h1>

    </div>
    ) 
  } else {
    return (
      <div className='page-body'>
  
          <Paper style={styles.Paper}>
  
            <Typography variant='title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
              Welcome {firebase.auth().currentUser.displayName}! You are signed in.
            </Typography> 
            <br />
  
            <Typography variant='display1'>Result</Typography>
          </Paper>
  
          <br />
          <a target="_blank" href="https://www.google.com/maps/"> Get Directions</a>
  
          <Map center={this.state.center} style={styles.Map}/>
  
        </div>
    )
  }
  
}
}


export default Result;