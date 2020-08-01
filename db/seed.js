const {mongoose} = require('./connection')
const Event = require('../models/event')
const User = require("../models/user")
const data = require('./seeddata.json')
const udata = require('./userlist.json')
const express = require('express')

const insertMany = async(req, res) => {
    try {
        const allEvents = await Event.create(data)
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(400).send(error)
    }
}

const insertFew = async(req, res) => {
    try {
        const allUsers = await User.create(udata)
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(200).send(error)
    }
}


//insertMany(data)
insertFew(udata)