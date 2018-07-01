import React, {Component} from "react";
import firebase from "firebase";
import  Map from "./../maps/map.js";
import API from "../../utils/API";
//import keys from "../../keys";
import { Paper, Typography } from '@material-ui/core';
import './PageBody.css';


class Home extends Component {
  state = {
    center:{
      lat: 0,
    lng: 0,
    },
    isSignedIn: true,
    user: firebase.auth().currentUser
    }

  componentDidMount=()=> {
    console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.setState({
        center:{
          lat: location.coords.latitude,
        lng: location.coords.longitude,
        }
      })
      this.updateLocation()
    })

  }

  updateLocation= ()=>{
    if(firebase.auth().currentUser && this.state.center.lat!==0&&this.state.center.lng!==0){
      API.updateLocation({email:firebase.auth().currentUser.email}, {Lat: this.state.center.lat,
        Lng:this.state.center.lat,})
      .then(res => console.log("location updated"))
      .catch(err => console.log(err));
    }
      
  }
  


  render (){
   
    return (
            <div className='page-body'>
              <h1>Home</h1>
              <div>Signed In! </div>
              <Map 
              
            />
        </div>
    )
  }
}
  

export default Home;
