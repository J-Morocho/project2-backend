const {Schema, model} = require('mongoose')


const eventSchema = new Schema({
    event_id: String,
    event_name: String,
    start_date_time: Date,
    end_date_time: Date,
    event_agency: String,
    event_type: String,
    event_borough: String,
    event_location: String,
    event_street_side: String,
    street_closure_type: String,
    community_board: String,
    police_precinct: String
})

module.exports = model('event', eventSchema)