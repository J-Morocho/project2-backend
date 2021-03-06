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


const getEventTypes = async(req, res) => {
    try {
        const eventTypes = await Event.find({},{"event_type":1})
        res.status(200).json(eventTypes)
    } catch (error) {
        res.status(400).send(error)
    }
}

// get one event
const getEventById = async(req, res) => {
    try {
        const eventById = await Event.findById(req.params.id)
        res.status(200).json(eventById)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getDistinctField = async(req, res) => {
    try {
        const locations = await Event.distinct(req.params.field)
        res.status(200).json(locations)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getEventByBoroughAndLocation = async(req,res) => {
    try {
        const queriedEvents = await Event.find({event_borough: req.params.q1, event_type: req.params.q2})
        await res.status(200).json(queriedEvents)
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    getAllEvents, 
    getEventsByBorough,
    getEventTypes,
    getEventById,
    getDistinctField,
    getEventByBoroughAndLocation
}

