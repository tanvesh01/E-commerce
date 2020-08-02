// const express = require('express');
// const router = express.Router();
// const auth = require("../../middleware/auth");
// const Item = require("../../models/Item");

// router.get("/", (req, res) => {
//     Item.find().sort({ date: -1 })
//         .then(items => res.json(items));
// });

// router.post("/", auth, (req, res) => {
//     const newItem = new Item({
//         name: req.body.name
//     })
//     newItem.save().then(item => res.json(item));
// })

// router.delete('/:id', auth, async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (!item) throw Error('No item found');

//         const removed = await item.remove();
//         if (!removed)
//             throw Error('Something went wrong while trying to delete the item');

//         res.status(200).json({ success: true });
//     } catch (e) {
//         res.status(400).json({ msg: e.message, success: false });
//     }
// });

// module.exports = router;
