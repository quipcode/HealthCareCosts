const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hccoperationsSchema = new Schema({
    label:{
        type: String,
        default: ""
    },
    value: {
        type: Number,
        default: 0
    }
})



module.exports = mongoose.model("hccoperations",hccoperationsSchema)