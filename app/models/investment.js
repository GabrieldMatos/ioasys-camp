'use strict';
module.exports = (sequelize, DataTypes) => {
  const Investment = sequelize.define('Investment', {
    value: DataTypes.DOUBLE
  }, {});
  Investment.associate = function(models) {
    this.belongsTo(models.Investor)
    this.belongsTo(models.Project)
  };
  return Investment;
};