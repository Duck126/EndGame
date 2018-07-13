import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import firebase from "firebase";
import PlacesWithStandaloneSearchBox from "./Search";
// import API from "../../utils/API";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // center:{
        // lat: 0,
        // lng: 0,
      // },
      center: this.props.center,
      isSignedIn: true,
      user: firebase.auth().currentUser,
      }
  }

  // componentDidMount() {
  //   console.log('component did mount fired');
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     console.log(location);
  //     this.setState({
  //       center:{
  //         lat: location.coords.latitude,
  //       lng: location.coords.longitude,
  //       }
  //     });
  //     this.updateLocation()
  //   });
  // }

  // updateLocation = ()=>{
  //   if(firebase.auth().currentUser){
  //       console.log("we are inside if userAuth");
  //       API.updateLocation({email:firebase.auth().currentUser.email,Lat:this.state.center.lat,Lng: this.state.center.lng })
  //       .then(res => console.log("location updated"))
  //       .catch(err => console.log(err));
  //     }

  // }

  
  
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
            <PlacesWithStandaloneSearchBox/>
            <GoogleMapExample
              containerElement={ <div style={{ height: `100%`, width: '100%' }} /> }
              mapElement={ <div style={{ height: '100%' }} /> }
            >
              
            </GoogleMapExample>
            {/* <button onClick={() => console.log(this.state)}>click me</button> */}
          </div>
      );
   }
}
}
export default Map;
