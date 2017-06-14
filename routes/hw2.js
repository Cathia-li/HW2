const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hw2')
const db = mongoose.connection
db.once('open', function () {
    console.log('Connection successful.')
})
const Schema = mongoose.Schema
const stringSchema = new Schema({
    string:String,
    length:Number
})
const string = mongoose.model('string', stringSchema)

// POST Create a new user
router.post('/name', function(req, res, next) {
    console.log(req.body)
    checkString(req.body.string)
        .then(function (status) {
            res.json(status)
        })
        .catch(function(status){
            const aString = new string({string:req.body.string,length:req.body.string.length})
            aPerson.save()
            res.json(status)
        })
})

//GET Fetch all users
router.get('/', function (req, res, next) {
    string.find({}, function (err, results) {
        res.json(results);
    })
})




function checkString(checkName) {
    return new Promise(function (resolve, reject) {
        string.find({string: checkName}, function (err, results) {
            if (results.length > 0) {
                resolve({found: results})
            }
            else {
                reject({found: false})
            }
        })
    })
}



//DELETE Delete the specified user
router.delete('/:name', function (req, res, next) {
    console.log(req.params.name)
    checkString(req.params.name)
        .then(function (status) {
            string.findOneAndRemove({string: req.params.name}, function (err, result) {
                if (err) {
                    res.json({message: 'String not found'});
                }
                else {
                    res.json({message: 'success'});
                }
            })
        })
        .catch(function (status) {
            res.json("String not found")
        })
});

module.exports = router;
