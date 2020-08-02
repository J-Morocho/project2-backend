require('../db/connection')
const {Schema} = require('mongoose')
const User = require('../models/user')
const Event = require('../models/event')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).send(error)
    }
}

const getUserByName = async(req, res) => {
    try {
        const user = await User.find({"name":req.params.name})
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
        const user = await User.findOne({name: req.params.name}, {eventsAttending:1})
        res.status(200).json(user)
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
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(error)
    }
}



module.exports = {getAllUsers, getUserByName, createUser, getUserEventList, addEventToUserList}