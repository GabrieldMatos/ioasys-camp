const router = require('express').Router();

const { investmentsController } = require('../controllers');

router.get('/',investmentsController.get);
router.get('/:investorId', investmentsController.getByInvestorId);
router.get('/:projectId', investmentsController.getByProjectId);  
router.post('/', investmentsController.create);
router.put('/:id',investmentsController.update); 
router.delete('/:id', investmentsController.delete); 

module.exports = router; 