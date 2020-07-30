const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/3000', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose