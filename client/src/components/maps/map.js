import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps';
import firebase from "firebase";
import API from "../../utils/API";

const google = window.google;
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center:{
        lat: 0,
      lng: 0,
      },
      directions: [],
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

  componentDidMount() {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({
        center:{
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
      });
     
      this.updateLocation()
    });

    //this is to give directions for the person
    // Error result only returns object
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: new google.maps.LatLng( 31.2672, 98.7431),
      destination: new google.maps.LatLng(30.2672, 97.7431),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if ( status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result
        });
        console.log(`you got that shit ${result}`)
      } else {
        console.log(`error fetching directions ${result, status}`)
      }
    })
  }

 

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
        defaultCenter={{ lat: this.state.center.lat, lng: this.state.center.lng }}
        defaultZoom = { 14 }
        options={{ streetviewcontrol: false, mapTypeControl: true}}
      >
    {<Marker position={this.state.center } />&& <DirectionsRenderer directions={this.state.center} />}
      {<Marker position={this.state.center } />}
      </GoogleMap>
   ));

   return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapExample
          containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
          mapElement={ <div style={{ height: '100%' }} /> }
        />
        {/* <button onClick={() => console.log(this.state)}>click me</button> */}
      </div>
   );
   }
};
export default Map;
