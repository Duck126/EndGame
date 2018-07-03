import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Create a user to the database
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // update isSignedIn on logout
  updateSignIn: function(userData){
    return axios.put("/api/users", userData)
  },
  updateLocation: function(userData){
    return axios.put("/api/users/updateLocation", userData)
  }
};