const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    userId:{
        type: String,
        default: ""
    },
    title:{
        type: String,
        default: ""
    },
    body: {
        type: String,
        default: ""
    }
})



module.exports = mongoose.model("feedback",feedbackSchema)