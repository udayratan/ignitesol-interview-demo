const express = require('express');
const BookController = require('./controller/BookController');
let router = express.Router();

router.route('/Filter_All_Books').get(BookController.Filter_All_Books);

module.exports = router;