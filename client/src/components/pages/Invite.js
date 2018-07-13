import React, { Component } from "react";
import {Redirect} from "react-router";
import firebase from "firebase";
import FriendsList from "../FriendsList";
// import InviteButton from '../InviteButton';
import Result from './Result';
import TimePicker from "../TimePicker";
import { Paper, Typography, Grid } from "@material-ui/core";
import "./PageBody.css";
import API from "../../utils/API";
//import Result from "./Result";

import getLatLngCenter from "../Algorithm.js";
// import { get } from "mongoose";

const styles = {
  Paper: { padding: 20, width: 600, margin: 'auto' },
}

class Invite extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      isSignedIn: true,
      user: {},
      group: [],
      checked: false,
      liveUsers: [],
      handleChange: this.handleChange,
      calculatedCenter: null,
      redirect: false
    };
  };

  componentWillUpdate(nextProps, nextState){
    console.log("Invite Js line 27", nextState.group);
    // this.props.groupStateUpdate(this.state.group);
  }

  handleGroupSubmit = (e) => {
    e.preventDefault();
    console.log("In Submit Function");
    let array = this.state.group;
    API.groupLocation({ group: array })
    .then(res => {
      console.log("we are back after getting data",res.data)
      let coords = [];
      for (let i=0; i < res.data.length; i++){
        let individualCoords = [];

        let latInd = parseFloat(res.data[i].Lat.$numberDecimal);
        let lngInd = parseFloat(res.data[i].Lng.$numberDecimal);
        individualCoords.push(latInd);
        individualCoords.push(lngInd);
        coords.push(individualCoords);
        console.log("Hello Coords",coords);
      }
      // return(coords)
      const result = getLatLngCenter(coords);
      console.log("this is the result",result);

      // const secondResult = myNextFunction(result);
      // const thirdResult = myOtherFunction(result);
      this.setState({
        calculatedCenter: result,
        redirect: true
      });
    })
    // .then(coords => getLatLngCenter(coords))
    // .then(data => console.log("this is the result", data))
    .catch(err => console.log(err))
   
  }
  

  handleChange = event => {
    var tempArr= [];
    console.log(event.target);
    if(event.target.checked === true){
      tempArr= [...this.state.group, event.target.value];
      this.setState({ 
        group: tempArr,
        checked: true
      });
      //event.target.checked = true;
      console.log(tempArr, "You checked one");
    } else if (event.target.checked === false) {
      tempArr = [...this.state.group];
      let index = tempArr.indexOf(event.target.value);
      tempArr.splice(index, 1);
      this.setState({
        group: tempArr,
        checked: false
      });
      //event.target.checked = false;
      console.log(tempArr, "you unchecked one");
    }
    //console.log("this is tempARRY",tempArr);
    //console.log(this.state.group);
  };

  componentDidMount() {
    API.getUsers()
    .then((response)=> {
      this.setState(()=>{
        return {
          liveUsers: response.data
        }
      })
    })
    .catch(err=>console.log(err))
  } 
    
    render(){
      let users = this.state.liveUsers;
      const{redirect, calculatedCenter} = this.state
      if (redirect)
          return(<Redirect to={{
            pathname: '/result',
            state: {calculatedCenter: this.state.calculatedCenter}
          }} />)
      return (
        <div className='page-body'>
          <Grid container spacing={24}> 
          <Grid item xs={12}> 
              <Paper style={styles.Paper}> 
                 
              <br />

            <Typography variant='display4'>Invite</Typography>
            </Paper>
          </Grid>
          <br />
          <Grid item xs={12}>
            <TimePicker />    
          </Grid>
          <br />
          <Grid item xs={12}>
          <FriendsList 
            users = {this.state.liveUsers}
            handleChange = {this.state.handleChange}
            checked = {this.checked}
            submit = {this.handleGroupSubmit}
          />

          </Grid>

           <Grid item xs={12}>


          </Grid>

          </Grid>
        </div>
      )
      }
  }


export default Invite;


/* <button className="btn" onClick={()=>firebase.auth().signOut()}> Sign out!</button> */
/*<Typography variant='title'>
<img alt="user" width="50px" margin='10px'src={firebase.auth().currentUser.photoURL} />
Welcome {firebase.auth().currentUser.displayName}! You are signed in.
</Typography>*/