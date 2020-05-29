const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OperationrequestSchema = new Schema({
    operationName:{
        type: String,
        default: ""
    },
    detail: {
        type: String,
        default: ""
    },
    userid:{
        type: String,
        default: ""
    },
})



module.exports = mongoose.model("operationrequest",OperationrequestSchema)


