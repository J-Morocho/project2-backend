
const mongoose = require('mongoose')

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true , useUnifiedTopology: true} , () => {
    console.log("CONNECTED TO MONGO");
})

//CONNECT TO DATABASE
  
//CONNECTION MESSAGING
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected!"));
db.on("disconnected", () => console.log("mongo disconnected"));

mongoose.Promise = Promise

module.exports = mongoose
