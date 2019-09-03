const { startup } = require('../app/models');
const express = require('express');
const router = express.Router();

//Listar todas startups
router.get('/', (req, res) => {
    startup.findAll().then(Startup =>{
      res.json((Startup))
    });
  }); 
  
  // Criar nova startup
  router.post('/', (req, res) => {
    startup.create({
      name: req.body.name,
      fantasyName: req.body.fantasyName,
      phoneNumber: req.body.phoneNumber,
      cnpj: req.body.cnpj,
      description: req.body.description,
      UserId: req.body.UserId
    }).then(newStartup => {
      res.json(newStartup)
    });
  });
  
  //Buscar startup
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    startup.findOne({
      where: {id: id}
    }).then(Startup =>{
      res.json(Startup)
    });
  }); 
  
  //Editar startup
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    startup.findOne({
      where: {id:id}
    }).then(Startup => {
      return Startup.updateAttributes(updates)
    }).then(updatedStartup =>{
      res.json(updatedStartup)
    });
  }); 
  
  //Deletar startup
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    startup.destroy({
      where: {id: id}
    }).then(deletedStartUp =>{
      res.json(deletedStartUp)
    });
  });

  module.exports = router;  