const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
   name: {
       type: String,
       required: true
   },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
       type: Boolean,
        required: false
    },
    date: {
       type: Date,
        default: Date.now()
    },
    inCart: {
        type: Boolean,
        required: false
    },
    details: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
