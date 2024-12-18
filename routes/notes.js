const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    obj = {

        'name': 'Kat',
        'age': 21
    }
    res.send('Hello world');
    // res.json(obj);

    console.log(req.body);
});
module.exports = router;