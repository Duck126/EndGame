require("dotenv").config();

const fb = {
    key: process.env.REACT_APP_FBAPI,
    auth: process.env.REACT_APP_FBAUTH
};

export default fb;