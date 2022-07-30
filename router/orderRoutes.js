const orderCtrl = require('../controllers/orderCtrl')

const router = require('express').Router()

router.post('/',orderCtrl.order)
router.post('/totamount',orderCtrl.totamount)


module.exports = router