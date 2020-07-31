const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: String,
    eventsAttending: [Schema.Types.ObjectId]
})

module.exports = model('user', userSchema)