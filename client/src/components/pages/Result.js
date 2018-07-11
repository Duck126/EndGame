import React, {Component} from "react";
import firebase from "firebase";
import { Paper, Typography } from '@material-ui/core';
import  Map from "./../maps/map.js";
import './PageBody.css';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import { Marker } from "react-google-maps";
// import SvgIcon from '@material-ui/core/SvgIcon';

const google = window.google;

// function markerIcon(props){
//   return (

//   );
// }

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
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

componentDidMount(){
const refs = {}

this.setState({
  bounds: null,
  center: {
    lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
    lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null,
  },
  markers: [],
  onMapMounted: ref => {
    this.setState({
      bounds: refs.map.getBounds()
    });
  },
  onSearchBoxMounted: ref => {
    refs.SearchBox = ref; 
  },
  onPlacesChanged: () => {
    const places = refs.SearchBox.getPlaces();
    const bounds = this.center;
    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location,
    }));
    const nextCenter = (nextMarkers, '0.position', this.state.center)
    this.setState({
      markers: nextMarkers,
      center: nextCenter,
    });
  }

}); // setState

} //componentWillMount

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
            <br/>
  
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