const express = require('express')
const router = express.Router()
const { todoController } = require('../controllers')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', todoController.showAll)
router.get('/:id', todoController.showOne)
router.post('/', todoController.addTodo)
router.put('/:id', todoController.put)
router.delete('/:id', authorization, todoController.delete)

module.exports = router