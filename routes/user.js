const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMeddleware = require('../middleware/authMiddleware')

router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.get('/auth', authMeddleware, userController.auth) 
router.get('/getAll', userController.getAll) //for testing, should be delete

module.exports = router;