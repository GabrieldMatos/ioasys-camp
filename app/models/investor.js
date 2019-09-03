'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investor = sequelize.define('Investor', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    wallet: DataTypes.DOUBLE
  }, {});
  Investor.associate = function(models) {
    this.belongsTo(models.User);
    this.hasMany(models.Investment);
  };
  return Investor;
};