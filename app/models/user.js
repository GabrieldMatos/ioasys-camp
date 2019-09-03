module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    User.associate = function(models) {  
      this.hasMany(models.startup);
      this.hasMany(models.Investor);
    }

    return User;
  }