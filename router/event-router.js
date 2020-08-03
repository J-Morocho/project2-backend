const router = require('express').Router()
const {getAllEvents, getEventsByBorough, 
    getEventTypes, getEventById,
    getDistinctEventLocations} = require('../controllers/event-controllers')

// backend connection test
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})

// get all events in database
router.get('/getAll', getAllEvents)

// get event by borough
router.get('/borough/:borough', getEventsByBorough)

// get event types ** May or may not need it 
router.get('/getEventTypes', getEventTypes)

// get event by Id
router.get('/id/:id', getEventById)

router.get('/locations', getDistinctEventLocations)

module.exports = router