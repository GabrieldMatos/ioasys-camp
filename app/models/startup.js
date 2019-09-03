'use strict';
module.exports = (sequelize, DataTypes) => {
  const startup = sequelize.define('startup', {
    name: DataTypes.STRING,
    fantasyName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  startup.associate = function(models) {
    this.belongsTo(models.User);
    this.hasMany(models.Project);
  };
  return startup;
};