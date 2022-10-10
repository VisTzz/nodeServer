const Router = require('express')
const router = new Router()
const contragentsController = require('../controllers/contragentsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/get', contragentsController.getContragents)
router.post('/create', checkRole('ADMIN'), contragentsController.createContragents)
router.get('/get/:id', contragentsController.getContragentsById)


module.exports = router;