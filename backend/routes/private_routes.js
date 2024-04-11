const express = require('express')
const route = express.Router()
const control = require('../controller/control')


//Post add user -- Private
route.post('/add_user', control.createUser)

//Get add user -- Private
route.get('/add_user', control.createUserPage)

//Get all user -- Public
route.get('/all_product', control.allProduct)

//Get all user -- Public
route.post('/single_product/:id', control.singleUser)

//Post checkout -- Public
route.post('/checkout', control.checoutkUser)

module.exports = route