var express = require('express');
var router = express.Router();
const blogController = require('../controller/blogController')
/* GET home page. */
router.get('/', blogController.index);

module.exports = router;
