const { User } = require('../app/models');
const express = require('express');
const router = express.Router();

//Listar todos Usuários
router.get('/', (req, res) => {
    User.findAll().then(User =>{
      res.json((User))
    });
  }); 
  
  // Criar novo usuário
  router.post('/', (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).then(newUser => {
      res.json(newUser)
    });
  });
  
  //Buscar usuário
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    User.findOne({
      where: {id: id}
    }).then(user =>{
      res.json(user)
    });
  }); 
  
  //Editar usuário
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    User.findOne({
      where: {id:id}
    }).then(user => {
      return user.updateAttributes(updates)
    }).then(updatedUser =>{
      res.json(updatedUser)
    });
  }); 
  
  //Deletar usuário
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    User.destroy({
      where: {id: id}
    }).then(deletedUser =>{
      res.json(deletedUser)
    });
  }); 
  

  module.exports = router;