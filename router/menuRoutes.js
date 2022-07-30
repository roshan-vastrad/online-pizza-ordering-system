const menuCtrl = require('../controllers/menuCtrl')

const router = require('express').Router()


router.get('/menu',menuCtrl.menu)


module.exports = router