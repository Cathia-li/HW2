var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    res.json("{string:"+req.body.test1+", length:"+req.body.test1.length+"}")
});

module.exports = router;
