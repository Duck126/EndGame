import React, {Component} from "react";
import firebase from "firebase";
import { Paper, Typography } from '@material-ui/core';
import  Map from "./../maps/map.js";
import './PageBody.css';
// import CardMedia from '@material-ui/core/CardMedia';


const styles = {
  Paper: { padding: 20, width: "100vw", margin: 'auto' },
  Map: { width: "100vw", margin: 'auto' },
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.location.state ? this.props.location.state.calculatedCenter[0] : null,
        lng: this.props.location.state ? this.props.location.state.calculatedCenter[1] : null
      },
      isSignedIn: true,
      user: firebase.auth().currentUser
      }
  }

 

render (){
  if(this.state.center.lat===null && this.state.center.lng===null){
    return(
      <div className='page-body'>
  
      <Paper style={styles.Paper}>

        {/* <Typography variant='title'>
          <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
          Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography>  */}
        <br />

        <Typography variant='display1'>Congrats!!! You found it!</Typography>
        {/* <img
          width="200"
          src="./bermuda-triangle.jpg"
        /> */}
      </Paper>

      <br />
      <Map center={{lat: 32.3078, lng:-64.7505 }} zoom={ 10 } style={styles.Map}/>

      {/* <h1 style={styles.Map}>There is nothing to show here</h1> */}

    </div>
    ) 
  } else {
    return (
      <div 
      // className='page-body'
      >
  
          <Paper style={styles.Paper}>
  
            {/* <Typography variant='title'>
              <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
              Welcome {firebase.auth().currentUser.displayName}! You are signed in.
            </Typography> 
            <br /> */}
  
            <Typography variant='display1'>Result</Typography>
          </Paper>
  
          <br />
  
          <Map center={this.state.center} style={styles.Map} zoom={14}/>
  
        </div>
    )
  }
  
}
}


export default Result;

/*        <Typography variant='title'>
          <img alt="user" width="50px" margin='5px' src={firebase.auth().currentUser.photoURL} />
          Welcome {firebase.auth().currentUser.displayName}! You are signed in.
        </Typography> 
        <br />
*/