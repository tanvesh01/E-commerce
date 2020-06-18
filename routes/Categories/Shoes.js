const express = require('express');
const router = express.Router();
const Shoe = require("../../models/Shoes.js");

router.get("/", (req, res) => {
    Shoe.find().then(shoe => res.json(shoe));
})

// Shoe.create(
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
