import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import Navbar from "../Navbar";
import Home from "./Home";
import Invite from "./Invite";
import Result from "./Result";
import API from "../../utils/API";
import Paper from '@material-ui/core/Paper';
import './PageBody.css';
import Back from "../Back.js";
// import keys from "../../keys";



firebase.initializeApp({
  apiKey: "AIzaSyDYTXe8VuIi0gdZVfI1V1kHpJ2N9Xj23-I",
 authDomain: "endgame-1529521978924.firebaseapp.com"
})



class Login extends Component {

  state = {
    isSignedIn: false,
    user: {},
    groupList: []
  }

  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: window.location,
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
          Lat:0,
          Lng:0
        })
        .then(res=> console.log("user created"))
        .catch(err => console.log(err));
      }
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
            <Back />
          </div>
        </Router>
          // <div>
          // <div>Signed In! </div>
          // <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button>
          // <h1>Welcome {firebase.auth().currentUser.displayName} </h1>
          // <img alt="user" src={firebase.auth().currentUser.photoURL} />
          // </div>
        ) :
          (<Paper style={styles.Paper}>
            <div className='logo-box' align='center' bottom-margin='10'>
              <img src='./eglogo.png' width='200'/>
              <StyledFirebaseAuth 
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          </Router>
        ) : (
          <Grid
            container
            spacing="40"
            direction="column"
            alignItems="center"
            justify="center"
          >
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
          <Grid item></Grid>
            <Paper>
              <Grid item>
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                > 
                  <Grid item>
                    <img
                      src='./eglogo.png'
                      width='200'
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <StyledFirebaseAuth
                  uiConfig={this.uiConfig}
                  firebaseAuth={firebase.auth()}
                />  
              </Grid>
            </Paper>
          </Grid>
        )}
      </div>
    )
  }
}

export default Login;

