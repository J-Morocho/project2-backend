require('../db/connection')
const {Schema} = require('mongoose')
const User = require('../models/user')
const Event = require('../models/event')
const e = require('express')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).send(error)
    }
    // FROM PIZZARATS
    //INDEX - Get all the rats with their pizza
// const index = async (req, res) => {
//     try {
//       //get array rats with pizza ids
//       const allRats = await Rat.find({});
//       //create a new array of rats with the pizza info
//       const rats = allRats.map(async (rat) => {
//         const thePizza = await Pizza.findById(rat.pizza);
//         return {
//           _id: rat._id,
//           name: rat.name,
//           pizza: thePizza,
//         };
//       });
//       console.log(rats);
//       const rats2 = await Promise.all(rats);
//       console.log(rats2)
//       await res.status(200).json(rats2);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   };
}

const getUserByName = async(req, res) => {
    try {
        const user = await User.findOne({"name":req.params.name})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
        
    }
}

const createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

// gets user events
const getUserEventList = async (req, res) => {
    try {
        const user = await User.findOne({name: req.params.name})
        const events = user.eventsAttending // array of events the user is attending
        // Wrapping map function was found at https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/#:~:text=The%20map%20function,-The%20map%20is&text=An%20async%20version%20needs%20to,the%20results%20in%20an%20Array.
        const o = await Promise.all( events.map( async (e) => {
            return await Event.findById(e) //ev is our promise?
        }))

        const personWithEvents = {
            name: user.name,
            eventsAttending: o
        }
        //const e = await Event.findById("5f2571244dc9b91dddd21d05") // works as expected
        //const e = await Event.findById(events[0])
        // const eventInfo = events.map(async(eventId) => {
        //     const e = await Event.findById(eventId)
        //     return e._id
        // })

        // const e2 = Promise.all(eventInfo)
        await res.status(200).send(personWithEvents)
    } catch (error) {
       res.status(400).send(error) 
    }

}

// Event objectId "5f2571244dc9b91dddd21d06"
// Takes in an objectId for an event in the database and adds it to a specified user
const addEventToUserList = async(req, res) => {
    try {
        // using find() returns an array with objects
        // findOne is a perfect fit for this function
        const user = await User.updateOne(
            {name:req.params.name},
            {$addToSet: {eventsAttending: req.params.eventObjectId}})

        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

const removeEventFromUserList = async (req, res) => {
    try {
        const removedEvent = await User.deleteOne(
            {eventsAttending}
        )
    } catch (error) {
        res.status(400).send(error)
        
    }
}


module.exports = {
    getAllUsers, getUserByName, 
    createUser, getUserEventList, 
    addEventToUserList, removeEventFromUserList}