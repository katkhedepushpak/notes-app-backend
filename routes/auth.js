const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
    obj = {
        'name': 'Kat',
        'age': 21
    }
    res.json(obj);
});

module.exports = router;