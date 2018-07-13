import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker,} from 'react-google-maps';
import firebase from "firebase";
import API from "../../utils/API";
import SvgIcon from '@material-ui/core/SvgIcon';
import MapWithASearchBox from './../maps/searchBoxMaker';


const google = window.google;

function localCafe(props){
  return (
    <SvgIcon {...props}>
      <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/>
    </SvgIcon>
);
}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      destination:{
        lat: 0,
      lng: 0,
      },
      bounds: null,
      position: {
        lat: 0,
        lng: 0,
      },
      directions: [],
      marker: [],
      isSignedIn: true,
      user: firebase.auth().currentUser,
      places: []

      }
  }

  
  componentDidMount(places) {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      

      

      this.setState({
        center: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
        
      });

      // this.directionMaker(center, destination);
    });

  }//component did mount end






  updateLocation = ()=>{
    if(firebase.auth().currentUser){
        console.log("we are inside if userAuth");
        API.updateLocation({email:firebase.auth().currentUser.email,Lat:this.state.center.lat,Lng: this.state.center.lng })
        .then(res => console.log("location updated"))
        .catch(err => console.log(err));
      }

  }
  
  render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.center.lat, lng: this.props.center.lng }}
        defaultZoom = { this.props.zoom }
        options={{ streetviewcontrol: false, mapTypeControl: true}}
      >

            <MapWithASearchBox/>
      
        <Marker position={this.state.position} />
      </GoogleMap>
   ));

   if (this.state.center === null) {
     return (
      <div style={{ height: '100vh', width: '100%' }}>
          <div>Loading...</div>
      {/* <button onClick={() => console.log(this.state)}>click me</button> */}
    </div>
     );
   } else {
      return(
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapExample
              containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
              mapElement={ <div style={{ height: '100%' }} /> }
            >
            <MapWithASearchBox/>
            {/* <button onClick={() => console.log(this.state)}>click me</button> */}
            </GoogleMapExample>
          </div>
      );
    }
  }
}
export default Map;
