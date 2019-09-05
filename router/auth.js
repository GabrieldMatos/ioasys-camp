const router = require('express').Router();

const { authController } = require('../controllers');

router.get('/',authController.login);

module.exports = router;