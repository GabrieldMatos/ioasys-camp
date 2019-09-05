const projectsController = require('./projects');
const usersController = require('./users');
const startupsController = require('./startups');
const investorsController = require('./investors');
const investmentsController = require('./investments');
const authController = require('./auth');

module.exports = {
  projectsController,
  usersController,
  startupsController,
  investorsController,
  investmentsController,
  authController
};