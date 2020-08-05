
require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI

mongoose.connect(mongoURI, { useNewUrlParser: true , useUnifiedTopology: true} , () => {
    console.log("CONNECTED TO MONGO");
})

//const db = mongoose.connection

//CONNECT TO DATABASE
  
//CONNECTION MESSAGING
// db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
// db.on("connected", () => console.log("mongo connected!"));
// db.on("disconnected", () => console.log("mongo disconnected"));

mongoose.Promise = Promise

module.exports = mongoose
