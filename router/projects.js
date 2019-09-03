const { Project } = require('../app/models');
const express = require('express');
const router = express.Router();

//Listar todos projetos
router.get('/', (req, res) => {
    Project.findAll().then(Project =>{
      res.json((Project))
    });
  }); 
  
  // Criar novo projeto
  router.post('/', (req, res) => {
    Project.create({
      name: req.body.name,
      value: req.body.value,
      startDate: req.body.startDate,
      description: req.body.description,
      StartupId: req.body.StartupId,
      InvestorId: req.body.InvestorId
    }).then(newProject => {
      res.json(newProject)
    });
  });
  
  //Buscar projeto
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    Project.findOne({
      where: {id: id}
    }).then(project =>{
      res.json(project)
    });
  }); 
  
  //Editar projeto
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    Project.findOne({
      where: {id:id}
    }).then(project => {
      return project.updateAttributes(updates)
    }).then(updatedProject =>{
      res.json(updatedProject)
    });
  }); 
  
  //Deletar projeto
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Project.destroy({
      where: {id: id}
    }).then(deletedProject =>{
      res.json(deletedProject)
    });
  }); 
  module.exports = router;  