// // /backend/data.js
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// // this will be our data base's data structure
// const DataSchema = new Schema(
//     {
//         id: Number,
//         message: String
//     },
//     { timestamps: true }
// );
//
// // export the new Schema so we could modify it using Node.js
// module.exports = mongoose.model("Data", DataSchema);

let mongoose = require('mongoose');
let DataSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }

    },
        { timestamps: true }
    );

module.exports = mongoose.model("Data", DataSchema);

