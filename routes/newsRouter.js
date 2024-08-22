const Router = require('express')
const newsController = require('../controllers/newsController')
const router = new Router()

router.get('/test', newsController.test) // Test line for news
router.post('/getByQ', newsController.getByQ)
// router.post('/getByS', newsController.getBySoruce)

module.exports = router