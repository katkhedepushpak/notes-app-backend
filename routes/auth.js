const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');


const JWT_SECRET_URI = "pushpakNotesAppAintNothinButAGThang";

// Route to create a new user
// We use express-validator to validate the input data
// We use async/await to handle asynchronous operations
// We use try/catch to handle errors

router.post(
  '/createuser',
  [
    // Validate the name field
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    // Validate the email field
    body('email', 'Enter a valid email').isEmail(),
    // Validate the password field
    body('password', 'Enter a valid password').isLength({ min: 8 }),
  ],

  async (req, res) => {
    // Check for validation
    //  errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            }

            try {
            // Check if a user with the given email already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: 'Email already exists' });
            }
            
            var salt = bcrypt.genSaltSync(10);
            var secPass = bcrypt.hashSync(req.body.password, salt);
            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            objData = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign({objData, JWT_SECRET_URI})

            // Send the created user as a response
            res.json({authToken});
            } catch (error) {
            // Log the error message and send a 500 status code
            console.error(error.message);
            res.status(500).send('Some error occurred', error.message);
            }
        }
);

module.exports = router;
