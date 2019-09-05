const { User } = require('../app/models');
const EncryptorService = require('../services/EncryptorService')
module.exports = {
  
  login: async (req, res) => {
    if (!req.param('email') || !req.param('password')) {
      return res.status(400).json('email-or-password-missing');
    }

    const email = req.param('email');
    const password = req.param('password');

    try {
      const user = await User.findOne({
        where: {email: email}
      });
      
      if (!user) return res.status(404).json('user-not-found');

      if (EncryptorService.comparePassword(password, user)) {

        return res.status(200).json({
          token: EncryptorService.generateToken(user.id),
          user
        });

      } else {
        return res.status(401).json('incorrect-password');
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        code: error.code,
        details: error.details
      });
    }
  
  }
};

