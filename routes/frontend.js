var express = require('express');
var router = express.Router();
const frontendController = require('../controller/frontendController')
/* GET frontend page. */
router.get('/', frontendController.index);

module.exports = router;