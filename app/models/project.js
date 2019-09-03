'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    value: DataTypes.DOUBLE,
    startDate: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    this.belongsTo(models.startup)
    this.hasMany(models.Investment)
  };
  return Project;
};