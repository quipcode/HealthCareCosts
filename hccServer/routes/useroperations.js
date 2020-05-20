const express = require("express");
const router = express.Router();

const UserOperations = require('../models/useroperations')
const cors = require('./cors')
const useroperationsRouter = express.Router()

useroperationsRouter.route('/')
    .options(cors.corsWithOptions, (req,res) => res.sendStatus(200))
    .post(cors.cors, (req,res,next) => {
        const newUserOperations = new UserOperations({
            UserId: req.body.userid,
            Operation: req.body.operation,
            MedPayment: req.body.medPayment,
            PaidAmnt: req.body.actualPaid,
            CoverMedicarePayment: req.body.coveredByMedicare
        })
        newUserOperations
        .save()
        .then(useroperation => res.json(useroperation))
        .catch(err => next(err))
    })
    .get(cors.cors, (req,res,next) => {
        UserOperations.find().sort({value: 1})
        .then(usstates => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(usstates)
        })
        .catch(err => next(err))
    })

module.exports = useroperationsRouter
