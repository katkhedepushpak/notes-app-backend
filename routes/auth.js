const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Enter valid password").isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.json(user);
    } catch (err) {
        if (err.code === 11000) { 
            console.log("Email already exists");
            return res.status(400).json({ error: "Email already exists", message: err.message });
        }
        return res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;