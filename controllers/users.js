const { User } = require('../app/models');
const EncryptorService = require('../services/EncryptorService');
module.exports = {
  get: async (req, res) => {
    try {
      const response = await User.findAll();;
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  getByEmail: async (req, res) => {
    try {
      const { email } = req.params;
      const response = await User.findOne({
        where: {email: email}
      });

      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const params = req.body;
      const response = await User.create({
        name: params.name,
        email: params.email,
        password: EncryptorService.hashPassword(params.password)
      });
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body.updates;

      const response = await User.findOne({
        where: {id:id}
      }).then(user => {
        return user.updateAttributes(updates)
      })
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },
};
