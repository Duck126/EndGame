import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./Home2";
import Invite from "./Invite";
import Result from "./Result";
import Navbar from "../Navbar";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import API from "../../utils/API";
// import keys from "../../keys";

// console.log("Hello",FB.api);

firebase.initializeApp({
  // apiKey: keys.FB.api,
  // authDomain: keys.FB.auth
  apiKey: "AIzaSyDYTXe8VuIi0gdZVfI1V1kHpJ2N9Xj23-I",
 authDomain: "endgame-1529521978924.firebaseapp.com"
})

class Login extends Component {
  state = {
    isSignedIn: false,
    user: {}
  }
  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl:"http://localhost:3000",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSucessWithAuthResult: ()  => true,
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
      this.createNewUser()
      
    })
  }
 
  createNewUser = () =>{
      if(firebase.auth().currentUser){
        API.createUser({
          userName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          photoURL: firebase.auth().currentUser.photoURL,
          isSignedIn: this.state.isSignedIn,
        })
        .then(res=> console.log("user created"))
        .catch(err => console.log(err));
      }
  }

  

    // loadUsers = () => {
    //   API.getUsers()
    //   .then(res =>
    //     this.setState({ isSignedIn: true })
    //   )
    //   .catch(err => console.log(err));
    // }
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
          (<div>
            <h1>Log In Here!</h1> 
            <StyledFirebaseAuth 
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
            </div>
         )
          }
        </div>
      )
    }
  }
  
  export default Login;

