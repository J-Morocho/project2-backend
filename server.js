require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const morgan = require("morgan");
const cors = require("cors"); 
const mongoose = require('mongoose')
const testroute = require('./router/index')

const PORT = process.env.PORT; 
const NODE_ENV = process.env.NODE_ENV;

const whitelist = ["https://project2-backend-hosted.herokuapp.com/", "https://localhost:3000/", "mongodb://localhost/3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(
        new Error("Not allowed by CORS, domain needs to be added to whitelist")
      );
    }
  },
};

// MIDDLEWARE

NODE_ENV === "development" ? app.use(cors()) : app.use(cors(corsOptions));
// Enables websites in whitelist to make API calls to your server, enables all sites in development
app.use(cors())
app.use(express.json()); //Turns JSON from post/put/patch requests and converts them into req.body object
app.use(morgan("dev")); // Enables Morgan logging, creating more useful terminal logs while server runs

app.use('/', testroute)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



