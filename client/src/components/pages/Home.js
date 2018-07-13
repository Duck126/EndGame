import React, {Component} from "react";
import firebase from "firebase";
import  Map from "./../maps/map.js";
import API from "../../utils/API";
import './PageBody.css';


const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
  Map: { padding: 20, width: 600, margin: 'auto' },
}

class Home extends Component {
  constructor(props) {
    super(props);
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
    // console.log('component did mount fired');
    navigator.geolocation.getCurrentPosition((location) => {
      // console.log(location);
      this.setState({
        center:{
          lat: location.coords.latitude,
        lng: location.coords.longitude,
        }
      });
      this.updateLocation()
    });
  }

  updateLocation = ()=>{
    if(firebase.auth().currentUser){
        API.updateLocation({email:firebase.auth().currentUser.email,Lat:this.state.center.lat,Lng: this.state.center.lng })
        .then(res => res.json)
        .catch(err => console.log(err));
      }

  }

render (){
  return (
    <div>
        <Map 
        center={this.state.center} 
        style={styles.Map}
        zoom={14}
        />

    </div>
  )
}
}
export default Home;