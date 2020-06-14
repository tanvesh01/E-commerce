const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
router.post("/", (req, res) => {
    const { email, password } = req.body;

    //* Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: "enter all fields!" })
    }

    //* Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "user does not exist exists" });
            //* validating/comparing : plain password to hashed password!
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({
                            msg: "Invalid credentials"
                        })
                    }

                    jwt.sign(
                        { id: user.id },
                        "tanvesh01",
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) {
                                throw err;
                            }
                            else {
                                res.json({ //* this is the data we send when register
                                    token,
                                    user: {
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                })
                            }
                        }
                    )
                })


        })
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
})

module.exports = router; 