var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("Welcome");
});

router.get('/:name', function (req, res, next) {
    let theName = req.params.name;
    console.log(theName);
    res.json({ "string": theName, "length": theName.length })
});

module.exports = router;