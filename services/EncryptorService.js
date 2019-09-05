const bcrypt = require('bcrypt-nodejs');
const JwtService = require('./jwtService')
module.exports = {

  hashPassword: (password) => {
     return password = bcrypt.hashSync(password);
  },

  comparePassword: (password, user) => bcrypt.compareSync(password, user.password),

  generateToken: (user) => {
      return JwtService.issue({ user: user });
  }
}