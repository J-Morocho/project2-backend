const {mongoose} = require('./connection')
const Event = require('../models/event')
const data = require('./seeddata.json')
const express = require('express')

const insertMany = async(req, res) => {
    try {
        const allEvents = await Event.create(data)
        res.status(200).json(allEvents)
    } catch (error) {
        res.status(400).send(error)
    }
}

insertMany(data)