const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
   name: {
       type: String,
       required: true
   },
    price: {
        type: Number,
        required: false
    },
    stock: {
       type: Boolean,
        required: false
    },
    date: {
       type: Date,
        default: Date.now()
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
