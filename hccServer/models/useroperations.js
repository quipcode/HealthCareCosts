const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const useroperationsSchema = new Schema({
    UserId:{
        type: String,
        default: ""
    },
    Operation: {
        type: String,
        default: ""
    },
    MedPayment: {
        type: Currency, 
         min: 0
    },
    PaidAmnt: {
        type: Currency,
         min: 0
    },
    CoverMedicarePayment: {
        type: Currency,
         min: 0
    }
})

module.exports = mongoose.model("useroperations", useroperationsSchema);
   