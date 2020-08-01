const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/p2_ryze_db', { useNewUrlParser: true , useUnifiedTopology: true} )

mongoose.Promise = Promise

module.exports = mongoose
