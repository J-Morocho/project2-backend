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



module.exports = {getAllEvents}

