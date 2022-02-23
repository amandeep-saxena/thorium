const express = require('express');
const obj1 = require("../loger/loger");
const obj2 = require("../uttil/helper")
const boj3 = require("../validator/formatter)
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj1.welcome()
    obj2 = dataPrint()
    obj3 = trimName()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason