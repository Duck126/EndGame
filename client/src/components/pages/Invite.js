import React, { Component } from "react";
import {Redirect} from "react-router";
// import firebase from "firebase";
import FriendsList from "../FriendsList";
import TimePicker from "../TimePicker";
import { Grid, Paper, Typography } from "@material-ui/core";
import "./PageBody.css";
import API from "../../utils/API";
import getLatLngCenter from "../Algorithm.js";

const styles = {
  Paper: { padding: 20, width: "95vw", margin: 'auto', maxWidth:"600px" },
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
      date: null,
      calculatedCenter: null,
      redirect: false
    };
  };


  handleGroupSubmit = (e) => {
    e.preventDefault();
    let array = this.state.group;
    API.groupLocation({ group: array })
    .then(res => {
      let coords = [];
      for (let i=0; i < res.data.length; i++){
        let individualCoords = [];
        let latInd = parseFloat(res.data[i].Lat.$numberDecimal);
        let lngInd = parseFloat(res.data[i].Lng.$numberDecimal);
        individualCoords.push(latInd);
        individualCoords.push(lngInd);
        coords.push(individualCoords);
      }
      const result = getLatLngCenter(coords);
      this.setState({
        calculatedCenter: result,
        redirect: true
      });
    })
    .catch(err => console.log(err))
   
  }

  handleDate = event => {
    event.preventDefault();
    let newdate = JSON.stringify(event.target.value);
    console.log(newdate);
    this.setState({
      date: newdate
    });
    
  }
  

  handleChange = event => {
    var tempArr= [];
    // console.log(event.target);
    if(event.target.checked === true){
      tempArr= [...this.state.group, event.target.value];
      this.setState({ 
        group: tempArr,
        checked: true
      });
    } else if (event.target.checked === false) {
      tempArr = [...this.state.group];
      let index = tempArr.indexOf(event.target.value);
      tempArr.splice(index, 1);
      this.setState({
        group: tempArr,
        checked: false
      });
    }
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
      const{redirect, calculatedCenter} = this.state
      if (redirect)
          return(<Redirect to={{
            pathname: '/result',
            state: {
              calculatedCenter: this.state.calculatedCenter,
              date: this.state.date
            }
          }} />)
      return (
        <div className='page-body'>
          <Grid container spacing={24}> 
          <Grid item xs={12}> 
              <Paper style={styles.Paper}>
              <br />

              <Typography variant='display2'>Pear Up!</Typography>
              <Typography variant='body1'>Your bushel can have as many pears as you need.</Typography>
            </Paper>
          </Grid>
          <br />
          <Grid item xs={12}>
            <TimePicker
              handleDate={this.handleDate}
            />    
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