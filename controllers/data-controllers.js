// create all routes here then refactor
require('../db/connection')
const Event = require('../models/event')

const getAllEvents = async (req, res) => {
    try {
        const allEvents = await Event.find({})
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getEventsByBorough = async(req, res) => {
    try {
        const boroughEvents = await Event.find({event_borough: req.params.borough}, {event_borough:1})
        res.status(200).json(boroughEvents)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {getAllEvents, getEventsByBorough}

