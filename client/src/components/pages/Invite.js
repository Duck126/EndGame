import React, { Component } from "react";
import {Redirect} from "react-router";
// import firebase from "firebase";
import FriendsList from "../FriendsList";
import TimePicker from "../TimePicker";
import { Paper, Typography, Grid } from "@material-ui/core";
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

            <Typography variant='display1'>Invite</Typography>
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

           <Grid item xs={24}>


          </Grid>

          </Grid>
        </div>
      )
      }
  }


export default Invite;
