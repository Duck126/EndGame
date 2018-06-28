import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./Home";
import Invite from "./Invite";
import Result from "./Result";
import Navbar from "../Navbar";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import keys from "../../keys";

// console.log("Hello",FB.api);

// firebase.initializeApp({
//   apiKey: keys.FB.api,
//   authDomain: keys.FB.auth
// //   apiKey: "AIzaSyDYTXe8VuIi0gdZVfI1V1kHpJ2N9Xj23-I",
// //  authDomain: "endgame-1529521978924.firebaseapp.com"
// })

class Login extends Component {
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

  render(){
    return (
      <div className="App">
      {this.state.isSignedIn ? (
      <Router>
        <div>
          <Navbar />
          <Route  exact path="/" component={Home} />
          <Route exact path="/invite" component={Invite} />
          <Route exact path="/result" component={Result} />
        </div>
      </Router>
        // <div>
        // <div>Signed In! </div>
        // <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button>
        // <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
        // <img alt="user" src={firebase.auth().currentUser.photoURL} />
        // </div>
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

export default Login;

