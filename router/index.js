const router = require('express').Router()
const {getAllEvents} = require('../controllers/data-controllers')


// backend connection test
router.get('/', (req,res) => {
    res.send('Backend has been reached!')
})

// get all events in database
router.get('/getAll', getAllEvents)
// create data
router.post('/', )
// update datum
router.put('/', )
// remove datum
router.delete('/', )

module.exports = router