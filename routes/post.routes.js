const Router = require("express")
const router = new Router()
const postController = require('../controllers/post.controller.js')

router.post('/post', postController.CreatePost)
//router.get('/post', postController.)
router.get('/post', postController.GetPostByUser)

module.exports= router