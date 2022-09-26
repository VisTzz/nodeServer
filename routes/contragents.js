const Router = require('express')
const router = new Router()
const contragentsController = require('../controllers/contragentsController')

router.get('/get', contragentsController.getContragents)
router.post('/create', contragentsController.createContragents)
router.get('/get/:id', contragentsController.getContragentsById)


module.exports = router;