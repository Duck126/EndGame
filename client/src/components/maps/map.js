import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer,} from 'react-google-maps';
import firebase from "firebase";
import API from "../../utils/API";
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';

const google = window.google;
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
      directions: [],
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }


  componentDidMount() {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      var center = {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      }

      //this is where our destination will be implimented
      var destination= {
        lat: 30.2672, 
        lng: -97.7431,
      }

      this.setState({
        center: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },

        //this is where our destination will be implimented
        destination: {
          lat: 30.2672, 
          lng: -97.7431,
        }
      });

      this.directionMaker(center, destination);

      this.searchBoxMaker()

      this.updateLocation()
    });

  }//component did mount end

directionMaker = (center, destination) =>{
  const DirectionsService = new google.maps.DirectionsService();
  DirectionsService.route({
    origin: center,
    destination: destination,
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


searchBoxMaker = () =>{
  const refs = {  }

  this.setState({
    bounds: null,
    oonMapMounted: ref => {
      refs.map = ref;
    },

    onBoundsChanged: () => {
      this.setState({
        bounds: refs.map.getBounds()
      })
    },
    onSearchBoxMounted: ref => {
      refs.searchBox = ref;
    },
    onPlacesChanged: () => {
      const places = refs.searchBox.getPlaces();
      const bounds = new google.map.LatLngBounds();
      places.forEach(place =>{
        if (place.geometry.viewport) {
          bounds.union(place.geometry.location)
        } else {
          bounds.extend(place.geometry.location)
        }
      });

      const nextMarkers = places.map(place=>({
        position: place.geometry.location,
      }));

      this.setState({
        markers: nextMarkers,
      })

    }, //onPlacesChanged 

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
        defaultCenter={{ lat: this.props.center.lat, lng: this.props.center.lng }}
        defaultZoom = { 14 }
        options={{ streetviewcontrol: false, mapTypeControl: true}}
      >

      <SearchBox
        ref={props.onSearchBoxMounted}
        bounds={props.center}
        controlPosition={google.maps.ControlPosition.TOP_LEFT}
        onPlacesChanged={props.onPlacesChanged}
      >
        <input 
        type="text"
        placeholdder="Search for that Coffee"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
        />
      </SearchBox>

      

        { this.state.directions && <DirectionsRenderer directions={this.state.directions} /> }
        <Marker position={this.state.center} />
      </GoogleMap>
   ));

   if (this.state.center === null) {
     return (<div>Loading...</div>);
   } else {
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
}
}
export default Map;
