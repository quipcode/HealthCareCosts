const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const samplehccSchema = new Schema({
    AvgMedPayment: {
        type: Currency, 
         min: 0
    },
    AvgAllowedAmnt: {
        type: Currency,
         min: 0
    },
    HCPCSCode: {
        type: String,
        default: ""
    },
    HCPCSDescription: {
        type: String,
        default: ""
    },
    ServicesCoveredbyMedicare: {
        type: Currency,
         min: 0
    },
    TotalAllowedAmount: {
        type: Currency,
         min: 0
       
    },
    TotalMedicarePayment: {
        type: Currency,
         min: 0
    },
   ProviderState: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model("samplehcc3", samplehccSchema);
   