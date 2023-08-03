const express = require('express')
const router = express.Router()
const Task2Controller = require('../controllers/userController')

//Task 1:- 

//test-api
router.get('/test-me', function(req, res) {
    res.send({ status: true, message: "Hello World" })
})


//task 2

router.post('/task2',Task2Controller.sumOfArray)



module.exports = router