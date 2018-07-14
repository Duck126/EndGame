import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import firebase from "firebase";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: this.props.center,
      isSignedIn: true,
      user: firebase.auth().currentUser,
      }
  }

 
  
  
  render() {
    // {initAutoComplete = props.initAutoComplete} 
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: this.props.center.lat, lng: this.props.center.lng }}
        defaultZoom = { this.props.zoom }
        options={{ streetviewcontrol: false, mapTypeControl: true}}
      >
      
      {<Marker position={this.props.center } />}
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
            />
          </div>
      );
   }
}
}
export default Map;
