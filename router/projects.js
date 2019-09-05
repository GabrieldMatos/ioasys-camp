const router = require('express').Router();

const { projectsController } = require('../controllers');

router.get('/',projectsController.get);
router.get('/:startupId', projectsController.getByStartupId);  
router.post('/', projectsController.create);
router.put('/:id',projectsController.update); 
router.delete('/:id', projectsController.delete); 

module.exports = router; 