const express = require('express');
const router = express.Router();
const Phones = require("../../models/Phones.js");

router.get("/", (req, res) => {
    Phones.find().then(phone => res.json(phone));
})

// Phones.create(
//     {
//         name: "galaxy 2",
//         brand: "samsung",
//         price: "1000",
//         rating: 0,
//         imageLink: "some link",
//         discription: "SICKKO MODE!!",
//         category: "Phone",
//     },
//     function (err, phone) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(phone);
//         }
//     }
// );

module.exports = router;
