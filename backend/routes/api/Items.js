const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req,res) => {
 Item.find()
     .then(items => res.json(items));
});

// @route POST api/items
// @desc Add an item
// @access Public
router.post('/', (req,res) => {
    const newItem = new Item({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        details: req.body.price,
        count: req.body.count,
        total: req.body.total
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;