const { Investor } = require('../app/models');

module.exports = {
  get: async (req, res) => {
    try {
      const response = await Investor.findAll();;
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
      const response = await Investor.findOne({
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
      const response = await Investor.create({
        name: params.name,
        cnpj: params.cnpj,
        phoneNumber: params.phoneNumber,
        wallet: params.wallet,
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

      const response = await Investor.findOne({
        where: {id:id}
      }).then(investor => {
        return investor.updateAttributes(updates)
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
