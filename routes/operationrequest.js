const express = require("express");
const router = express.Router();

const OperationRequest = require('../models/operationrequest')
const operationsRequestRouter = express.Router()

operationsRequestRouter.route('/')
    .options( (req,res) => res.sendStatus(200))
    .post((req,res,next) => {
        const newUserOperationRequest = new OperationRequest({
            userid: req.body.userid,
            operationName: req.body.operationName,
            detail: req.body.detail,
        })
        newUserOperationRequest
        .save()
        .then(useroperation => res.json(useroperation))
        .catch(err => next(err))
    })
    .get((req,res,next) => {
        OperationRequest.find().sort({value: 1})
        .then(operationrequest => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(operationrequest)
        })
        .catch(err => next(err))
    })

module.exports = operationsRequestRouter
