const { Project } = require('../app/models');

module.exports = {
  get: async (req, res) => {
    try {
      const response = await Project.findAll();;
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        name: error.name,
        message: error.message,
      });
    }
  },

  getByStartupId: async (req, res) => {
    try {
      const { StartupId } = req.params;
      const response = await Project.findOne({
        where: {StartupId: StartupId}
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
      const response = await Project.create({
        name: params.name,
        value: params.value,
        startDate: params.startDate,
        description: params.description,
        startupId: params.StartupId,
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

      const response = await Project.findOne({
        where: {id:id}
      }).then(project => {
        return project.updateAttributes(updates)
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
      const response = await Project.destroy({
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
