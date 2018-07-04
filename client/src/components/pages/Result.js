import React from "react";
import firebase from "firebase";
import './PageBody.css';


const Result = () =>
  <div className='page-body'>
    <h1>Result</h1>
    <div>Signed In! </div>
      {/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */}
      <Typography variant='Title'>
        <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
        Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography> 
        <br />

      <Typography variant='display1'>Result</Typography>
              </Paper>
            <br />
  </div>;

export default Result;
