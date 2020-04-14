const mongoose = require('mongoose')
const Schema = mongoose.Schema

const samplehccSchema = new Schema({

})

module.exports = mongoose.model("SampleHCC", samplehccSchema);
        // _id: {
        //     $id: #/properties/_id,
        //     type: object,
        //     title: "The _id Schema",
        //     description: "An explanation about the purpose of this instance.",
        //     "default": {},
        //     "examples": [
        //         {
        //             "$oid": "5e952be0e259f820156de0c2"
        //         }
        //     ],
        //     "additionalProperties": true,
        //     "required": [
        //         "$oid"
        //     ],
        //     "properties": {
        //         "$oid": {
        //             "$id": "#/properties/_id/properties/$oid",
        //             "type": "string",
        //             "title": "The $oid Schema",
        //             "description": "An explanation about the purpose of this instance.",
        //             "default": "",
        //             "examples": [
        //                 "5e952be0e259f820156de0c2"
        //             ]
        //         }
        //     }
        // },
        Average Medicare Payment: {
            $id: "#/properties/Average Medicare Payment",
            "type": "integer",
            "title": "The Average medicare payment Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                176.0
            ]
        },
        "Average Allowed Amount": {
            "$id": "#/properties/Average Allowed Amount",
            "type": "integer",
            "title": "The Average allowed amount Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                176.0
            ]
        },
        "HCPCS Code": {
            "$id": "#/properties/HCPCS Code",
            "type": "string",
            "title": "The Hcpcs code Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "G0438"
            ]
        },
        "HCPCS Description": {
            "$id": "#/properties/HCPCS Description",
            "type": "string",
            "title": "The Hcpcs description Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Annual wellness visit for new Medicare enrollees"
            ]
        },
        "Services Covered by Medicare": {
            "$id": "#/properties/Services Covered by Medicare",
            "type": "string",
            "title": "The Services covered by medicare Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "32,149"
            ]
        },
        "Total Allowed Amount": {
            "$id": "#/properties/Total Allowed Amount",
            "type": "string",
            "title": "The Total allowed amount Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "5,654,813"
            ]
        },
        "Total Medicare Payment": {
            "$id": "#/properties/Total Medicare Payment",
            "type": "string",
            "title": "The Total medicare payment Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "5,654,813"
            ]
        },
        "Provider State": {
            "$id": "#/properties/Provider State",
            "type": "string",
            "title": "The Provider state Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "CT"
            ]
        }

{
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The Root Schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "additionalProperties": true,
    "required": [
        "_id",
        "Average Medicare Payment",
        "Average Allowed Amount",
        "HCPCS Code",
        "HCPCS Description",
        "Services Covered by Medicare",
        "Total Allowed Amount",
        "Total Medicare Payment",
        "Provider State"
    ],
    "properties": {
        "_id": {
            "$id": "#/properties/_id",
            "type": "object",
            "title": "The _id Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "$oid": "5e952be0e259f820156de0c2"
                }
            ],
            "additionalProperties": true,
            "required": [
                "$oid"
            ],
            "properties": {
                "$oid": {
                    "$id": "#/properties/_id/properties/$oid",
                    "type": "string",
                    "title": "The $oid Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "5e952be0e259f820156de0c2"
                    ]
                }
            }
        },
        "Average Medicare Payment": {
            "$id": "#/properties/Average Medicare Payment",
            "type": "integer",
            "title": "The Average medicare payment Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                176.0
            ]
        },
        "Average Allowed Amount": {
            "$id": "#/properties/Average Allowed Amount",
            "type": "integer",
            "title": "The Average allowed amount Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                176.0
            ]
        },
        "HCPCS Code": {
            "$id": "#/properties/HCPCS Code",
            "type": "string",
            "title": "The Hcpcs code Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "G0438"
            ]
        },
        "HCPCS Description": {
            "$id": "#/properties/HCPCS Description",
            "type": "string",
            "title": "The Hcpcs description Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Annual wellness visit for new Medicare enrollees"
            ]
        },
        "Services Covered by Medicare": {
            "$id": "#/properties/Services Covered by Medicare",
            "type": "string",
            "title": "The Services covered by medicare Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "32,149"
            ]
        },
        "Total Allowed Amount": {
            "$id": "#/properties/Total Allowed Amount",
            "type": "string",
            "title": "The Total allowed amount Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "5,654,813"
            ]
        },
        "Total Medicare Payment": {
            "$id": "#/properties/Total Medicare Payment",
            "type": "string",
            "title": "The Total medicare payment Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "5,654,813"
            ]
        },
        "Provider State": {
            "$id": "#/properties/Provider State",
            "type": "string",
            "title": "The Provider state Schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "CT"
            ]
        }
    }
}

// {
//     "Average Medicare Payment": 39,
//     "Average Allowed Amount": 59,
//     "HCPCS Code": "69210",
//     "HCPCS Description": "Removal of impact ear wax",
//     "Services Covered by Medicare": "1,430",
//     "Total Allowed Amount": "84,220",
//     "Total Medicare Payment": "56,482",
//     "Provider State": "AK"
//   },