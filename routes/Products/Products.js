const express = require('express');
const router = express.Router();
const Product = require("../../models/Product.js");

router.get("/:cat", (req, res) => {
    Product.find({ category: req.params.cat }).then(product => {
        //console.log(product);
        res.json(product)
    });
})

// Product.create(
//     {
//         name: "nikes air max",
//         imageLink: "some link",
//         size: "6/7/8/11/20",
//         discription: "SICKKO MODE!!",
//         category: "ye",
//     },
//     function (err, shoe) {
//         if (err) {
//             console.lof(err);
//         } else {
//             console.log(shoe);
//         }
//     }
// );

module.exports = router;
