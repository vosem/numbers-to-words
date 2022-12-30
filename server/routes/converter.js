var express = require('express');
var router = express.Router();
var convert = require('../utils/converter');

router.get('/', function(req, res, next) {
  var numbers = req.query.numbers.split('');
  var convertedData = convert(numbers);

  res.send({data: convertedData});
});

module.exports = router;
