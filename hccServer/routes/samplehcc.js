const express = require("express");
const router = express.Router();

const SampleHCC = require('../models/samplehcc')
const cors = require('./cors');
const samplehccRouter = express.Router()

samplehccRouter.route('/')
    .options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
    .get(cors.cors, (req,res,next) =>{
        // User.find()
        SampleHCC.find().sort({HCPCSCode :1})
        // .populate('comments.author')
        
        .then(samplehcc => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(samplehcc)
        })
        .catch(err => next(err))
    })

module.exports = samplehccRouter