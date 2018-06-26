import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';
import firebase from "firebase";
import { height } from 'window-size';

const iconsStyle ={
  color: 'black',
  size: '100%',
  display: 'flex',
  flexWrap: 'wrap'
};

const styles = {
 
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    
  );
}

function GroupIcon(props){
  return (
    <SvgIcon {...props}>
      <path  d= "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/>
    </SvgIcon>
  );
}

function Public(props){
  return (
    <SvgIcon {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" size="100%"/>
    </SvgIcon>
  )
}
function User(props){
  return (
    <div >
      <Avatar alt="User" src={firebase.auth().currentUser.photoURL} style={styles} />
    </div>
  )
}

function Logout(props){
  return (
    <SvgIcon {...props}>
      <path d=  "M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
 size="100%" />
    </SvgIcon>
  )
}

function Navbar(props){
  return (
    <div  >

      <Button variant="fab" style={{ margin:15, alignContent:'center' }} aria-label="edit" className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }>
        <Link to="/">
          <User style={iconsStyle} src={firebase.auth().currentUser.photoURL}/>
        </Link>
      </Button>

       <Button variant="fab" style={{ margin:15, alignContent:'center' }} aria-label="edit" className={window.location.pathname === "/" ? "active nav-link" : "nav-link" }>
        <Link to="/">
          <HomeIcon style={iconsStyle}/>
        </Link>
      </Button>

       <Button variant="fab" style={{ margin:15, alignContent:'center' }} aria-label="edit" className={window.location.pathname === "/invite" ? "active nav-link" : "nav-link" }  >
        <Link to="/invite">
          <GroupIcon style={iconsStyle} />
        </Link>
      </Button>

      <Button variant="fab" style={{ margin:15, alignContent:'center' }} aria-label="add" className={window.location.pathname === "/result" ? "active nav-link" : "nav-link"}>
        <Link to="/result">
          <Public style={iconsStyle} />
        </Link>
      </Button>

      <Button variant="fab" style={{ margin:15, alignContent:'center' }} aria-label="edit" className={window.location.pathname === "/login" ? "active nav-link" : "nav-link" }  >
        <Link onClick={()=>firebase.auth().signOut()} to="/login">
          <Logout style={iconsStyle}/>
        </Link>
      </Button>

    </div>
    
  )
}

export default Navbar;