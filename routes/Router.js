// import controllers review, products
const {adduser,login,getAlluser} = require('../controllers/userController.js')


// router
const router = require('express').Router()


// use routers
router.post('/signup',adduser)

router.get('/all', getAlluser)

router.post('/login',login)









module.exports = router