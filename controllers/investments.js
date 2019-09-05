const { Investment } = require('../app/models');

module.exports = {
  get: async (req, res) => {
    try {
      const response = await Investment.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  getByProjectId: async (req, res) => {
    try {
      const { ProjectId } = req.params;
      const response = await Investment.findOne({
        where: {ProjectId: ProjectId}
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

  getByInvestorId: async (req, res) => {
    try {
      const { ProjectId } = req.params;
      const response = await Investment.findOne({
        where: {ProjectId: ProjectId}
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
      const response = await Investment.create({
        value: params.value,
        InvestorId: params.InvestorId,
        ProjectId: params.ProjectId
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

      const response = await Investment.findOne({
        where: {id:id}
      }).then(investment => {
        return investment.updateAttributes(updates)
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

  delete: async (req, res) => {
    try {
      const { id } = req.params.id;
      const response = await Investment.destroy({
        where: {id: id}
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
};
