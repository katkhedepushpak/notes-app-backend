const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    
    console.log('Getting all the notes');
});

module.exports = router;