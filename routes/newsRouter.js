const Router = require('express')
const newsController = require('../controllers/newsController')
const router = new Router()

router.post('/getLatest', newsController.getLatest) //getLatest/word=test_message
router.post('/getByDate', newsController.getByDate)
router.post('/getByPublisher', newsController.getByPublisher)
router.post('/createPublisher', newsController.createPublisher) // checkRole
router.get('/test', newsController.test) // Test line for news

module.exports = router