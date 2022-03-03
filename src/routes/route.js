const express = require('express');
const router = express.Router();
const bookModel =("../models/bookmodel.js")
const bookController = require('../controllers/bookController')

router.post('/createNewAuthor', bookController.createNewAuthor)
router.post('/createNewBook', bookController.createNewBook)
router.get('/allBooks', bookController.allBooks)
router.get('/updatedBookPrice', bookController.upadatedBookPrice)
router.get('/authorsName', bookController.authorsName)

module.exports = router;