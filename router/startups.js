const router = require('express').Router();

const { startupsController } = require('../controllers');

router.get('/',startupsController.get);
router.get('/:userId', startupsController.getByUserId);  
router.post('/', startupsController.create);
router.put('/:id', startupsController.update); 

module.exports = router;