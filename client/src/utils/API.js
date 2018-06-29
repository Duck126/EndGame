import axios from "axios";

export default {
  // Gets all Users
  getUsers: function(userData) {
    return axios.get("/api/users", userData);
  },
  // Create a user to the database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // update isSignedIn on logout
  updateSignIn: function(userData){
    return axios.put("/api/users", userData)
  },
  // update isSignedIn on login
  updateCurrentUser: function(userData){
    return axios.put("/api/users", userData)
  }
};