// /*global google*/
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap,Marker} from 'react-google-maps';
import firebase from "firebase";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      center:{
        lat: 0,
      lng: 0,
      },
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

  componentDidMount() {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.setState({
        center:{
          lat: location.coords.latitude,
        lng: location.coords.longitude,
        }
      });
    });
  }

  
  
  render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.state.center.lat, lng: this.state.center.lng }}
        defaultZoom = { 14 }
        options={{ streetviewcontrol: false, mapTypeControl: true}}
      >
      {<Marker position={this.state.center } />}
      </GoogleMap>
   ));

   return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapExample
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
        <button onClick={() => console.log(this.state)}>click me</button>
      </div>
   );
   }
};
export default Map;
