const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/getOne', userController.getOne) // checkRole
router.get('/getAll', userController.getAll) //checkRole
router.delete('/delete/:id', userController.deleteUser) //checkRole
router.get('/test', userController.test) // Test line for user

module.exports = router
