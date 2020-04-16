const express = require("express");
const router = express.Router();

const USStates = require('../models/usstates')
const cors = require('./cors')
const usstatesRouter = express.Router()

usstatesRouter.route('/')
    .options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
    .get(cors.cors, (req,res,next) => {
        USStates.find().sort({value: 1})
        .then(usstates => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(usstates)
        })
        .catch(err => next(err))
    })

module.exports = usstatesRouter
