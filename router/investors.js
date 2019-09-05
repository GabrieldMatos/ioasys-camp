const router = require('express').Router();

const { investorsController } = require('../controllers');

router.get('/',investorsController.get);
router.get('/:userId', investorsController.getByUserId);  
router.post('/', investorsController.create);
router.put('/:id',investorsController.update); 

module.exports = router;