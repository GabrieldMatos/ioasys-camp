
const { Investor } = require('../app/models');
const express = require('express');
const router = express.Router();

//Listar todos investidores
router.get('/', (req, res) => {
    Investor.findAll().then(investor =>{
      res.json((investor))
    });
  }); 
  
  // Criar novo investidor
  router.post('/', (req, res) => {
    Investor.create({
      name: req.body.name,
      cnpj: req.body.cnpj,
      phoneNumber: req.body.phoneNumber,
      wallet: req.body.wallet,
      UserId: req.body.UserId
    }).then(newInvestor => {
      res.json(newInvestor)
    });
  });
  
  //Buscar investidor
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    Investor.findOne({
      where: {id: id}
    }).then(investor =>{
      res.json(investor)
    });
  }); 
  
  //Editar investidor
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    Investor.findOne({
      where: {id:id}
    }).then(investor => {
      return investor.updateAttributes(updates)
    }).then(updatedInvestor =>{
      res.json(updatedInvestor)
    });
  }); 
  
  //Deletar investidor
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Investor.destroy({
      where: {id: id}
    }).then(deletedInvestor =>{
      res.json(deletedInvestor)
    });
  });


  module.exports = router; 