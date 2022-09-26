const Router = require('express')
const router = new Router()
const userRouter = require('./user');
const contragentsRouter = require('./contragents');

router.use('/user', userRouter)
router.use('/contragents', contragentsRouter)

module.exports = router
