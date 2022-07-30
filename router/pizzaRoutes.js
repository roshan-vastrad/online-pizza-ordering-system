const pizzaCtrl = require('../controllers/pizzaCtrl')

const router = require('express').Router()

router.get('/pizza',pizzaCtrl.pizza)
router.get('/sizes',pizzaCtrl.sizes)
router.get('/desc',pizzaCtrl.desc)


module.exports = router