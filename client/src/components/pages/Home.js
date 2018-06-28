import FriendsList from "../FriendsList";
import React, {Component} from "react";
// import firebase from "firebase";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import keys from "../../keys";
import './PageBody.css';


class Home extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  // componentDidMount = () => {
    
  // }


  render (){
    return (
      <div className='page-body'>
    <h1>Home</h1>
    <div>Signed In! </div>
          <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
  </div>
    )
  }
}
  

// export default Home;
export default GoogleApiWrapper({
  apiKey: "AIzaSyAMqhG-GED8NdkrqM4tD0zair5WQEuXmwg"
})(Home)
