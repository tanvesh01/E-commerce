const express = require("express");
const router = express.Router();
const Product = require("../../models/Product.js");

router.get("/:cat", (req, res) => {
    Product.find({ category: req.params.cat }).then((product) => {
        //console.log(product);
        res.json(product);
    });
});

// Product.create(
//     {
//         name: "UNIFORIA PRO",
//         brand: "ADIDAS",
//         price: "160",
//         sizes: ["5"],
//         rating: 0,
//         imageLink:
//             "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/293609dd26704c498b9aaae20101c395_9366/Uniforia_Pro_Football_White_FH7362_01_standard.jpg",
//         discription: "SWAG",
//         category: "accessories",
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
