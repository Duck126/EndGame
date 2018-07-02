// import FriendsList from "../FriendsList";
import React, {Component} from "react";
// import firebase from "firebase";
import  Map from "./../maps/map.js";
// import API from "../../utils/API";
//import keys from "../../keys";
import './PageBody.css';


class Home extends Component {
 


  render (){
  //  console.log("this is process.env",process.env)
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
