'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Investors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING
      },
      wallet: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {  
        allowNull: false,  
        type: Sequelize.INTEGER,  
        onDelete: 'CASCADE',  
        references: {  
          model: 'Users',  
          key: 'id'  
        }  
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Investors');
  }
};