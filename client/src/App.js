import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";
import Login from "./components/pages/Login";
import Invite from "./components/pages/Invite";
import fb from "./keys";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// dotenv.config();
console.log(fb);



class App extends Component {
  state = {isSignedIn: false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
   

    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      console.log("user",user);
    })
  }

  // this is what will be displayed once signed in
  render(){
    return (
        <div className="App">
          {this.state.isSignedIn ? (
          <div>
            <div>Signed In! </div>
            <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
            <img alt="user" src={firebase.auth().currentUser.photoURL} />
          </div>
        ) :
          (<StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />)
          }
        </div>
    )
  }
}

export default App;