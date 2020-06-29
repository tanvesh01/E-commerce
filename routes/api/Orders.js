const express = require('express');
const router = express.Router();
const Order = require("../../models/Order");

router.post("/", (req, res) => {
    const newOrder = new Order({
        products: req.body.products,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        pin: req.body.pin,
        email: req.body.email
    })
    newOrder.save()
        .then(order => {
            console.log(order);
            res.json(order);
        })
})

router.get("/", (req, res) => {
    Order.find().populate('products').exec().then(data => {
        console.log(data);
        res.json(data);
    })
})

module.exports = router;