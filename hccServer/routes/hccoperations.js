const express = require("express");
const router = express.Router();

const HCCOperations = require('../models/hccoperations')
const cors = require('./cors')
const hccoperationsRouter = express.Router()

hccoperationsRouter.route('/')
    .options( (req,res) => res.sendStatus(200))
    .get( (req,res,next) => {
        HCCOperations.find().sort({value: 1})
        .then(usstates => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(usstates)
        })
        .catch(err => next(err))
    })

module.exports = hccoperationsRouter
