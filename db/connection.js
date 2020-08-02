
const mongoose = require('mongoose')

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true , useUnifiedTopology: true} )

mongoose.Promise = Promise

module.exports = mongoose
