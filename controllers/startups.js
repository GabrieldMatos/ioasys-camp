const { startup } = require('../app/models');

module.exports = {
  get: async (req, res) => {
    try {
      const response = await startup.findAll();;
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  getByUserId: async (req, res) => {
    try {
      const { UserId } = req.params;
      const response = await startup.findOne({
        where: {UserId: UserId}
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
      const response = await startup.create({
        name: params.name,
        fantasyName: params.fantasyName,
        phoneNumber: params.phoneNumber,
        cnpj: params.cnpj,
        description: params.description,
        UserId: params.UserId
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

      const response = await startup.findOne({
        where: {id:id}
      }).then(startup => {
        return startup.updateAttributes(updates)
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
