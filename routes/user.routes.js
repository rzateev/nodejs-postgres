const Router = require("express")
const router = new Router()
const userController = require('../controllers/user.controller.js')

router.post('/user', userController.createUser)
router.get('/user', userController.GetUsers)
router.get('/user/:id', userController.GetOneUser)
router.put('/user', userController.UpdateUser)
router.delete('/user/:id', userController.DeleteUser)

module.exports= router