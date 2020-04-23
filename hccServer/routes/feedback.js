const express = require("express");
const router = express.Router();

const Feedback = require('../models/feedback')
const cors = require('./cors')
const feedbackRouter = express.Router()

feedbackRouter.route('/')
    .options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
    .post(cors.cors, (req,res,next) => {
        const newFeedback = new Feedback({
            userId: req.body.userId,
            title: req.body.title,
            body: req.body.body,
        })
        newFeedback
        .save()
        .then(feedback => res.json(feedback))
        .catch(err => next(err))
    })
    .get(cors.cors, (req,res,next) => {
        USStates.find().sort({value: 1})
        .then(usstates => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(usstates)
        })
        .catch(err => next(err))
    })

module.exports = feedbackRouter
