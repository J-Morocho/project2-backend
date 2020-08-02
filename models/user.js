const {Schema, model} = require('mongoose')

// In eventsAttending the objectId must already be present in the database
const userSchema = new Schema({
    name: String,
    eventsAttending: [{type: Schema.Types.ObjectId, ref: 'event'}]
})

module.exports = model('user', userSchema)