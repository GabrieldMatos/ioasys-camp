const { Investment } = require('../app/models');
const express = require('express');
const router = express.Router();


//Listar todos investimentos
router.get('/', (req, res) => {
    Investment.findAll().then(Investment =>{
      res.json((Investment))
    });
  }); 
  
  // Criar novo investimento
  router.post('/', (req, res) => {
    Investment.create({
      value: req.body.value,
      InvestorId: req.body.InvestorId
    }).then(newInvestiment => {
      res.json(newInvestiment)
    });
  });
  
  //Buscar investimento
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    Investment.findOne({
      where: {id: id}
    }).then(investiment =>{
      res.json(investiment)
    });
  }); 
  
  //Editar investimento
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    Investment.findOne({
      where: {id:id}
    }).then(investiment => {
      return investment.updateAttributes(updates)
    }).then(updatedInvestment =>{
      res.json(updatedInvestment)
    });
  }); 
  
  //Deletar investimento
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Investment.destroy({
      where: {id: id}
    }).then(deletedInvestment =>{
      res.json(deletedInvestment)
    });
  });
  
  
  module.exports = router;  