require("dotenv").config();


   const keys =  {
    FB:{
        api: process.env.REACT_APP_FB_API,
        auth: process.env.REACT_APP_FB_AUTH_DOMAIN
    },
    GOOGLE_MAPS: {
        api_key: process.env.REACT_APP_GOOGLE_MAPS_API
    }
   };



    export default keys;



