const router = require('express').Router()
const {getAllEvents, getEventsByBorough} = require('../controllers/data-controllers')

// backend connection test
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})

// get all events in database
router.get('/getAll', getAllEvents)
// get event by borough
router.get('/:borough', getEventsByBorough)
// update datum
router.put('/', )
// remove datum
router.delete('/', )

module.exports = router