const jwt = require('jsonwebtoken');
const jwtSecret = "sails.config.secrets.jwtSecret";
const algorithm = "HS256";

module.exports = {
  issue: (payload) => {
    const token = jwt.sign(payload, jwtSecret, { algorithm});
    return token;
  },

  verify: (token, callback) => {
    return jwt.verify(token, jwtSecret, callback);
  }
};