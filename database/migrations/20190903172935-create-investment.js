'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Investments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
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
      ProjectId: {  
        allowNull: false,  
        type: Sequelize.INTEGER,  
        onDelete: 'CASCADE',  
        references: {  
          model: 'Projects',  
          key: 'id'  
        }  
      },
      InvestorId: {  
        allowNull: false,  
        type: Sequelize.INTEGER,  
        onDelete: 'CASCADE',  
        references: {  
          model: 'Investors',  
          key: 'id'  
        }  
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Investments');
  }
};