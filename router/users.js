const router = require('express').Router();

const { usersController } = require('../controllers');

router.get('/',usersController.get);
router.get('/:email', usersController.getByEmail);  
router.post('/', usersController.create);
router.put('/:id', usersController.update); 

module.exports = router;