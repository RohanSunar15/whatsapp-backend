const AuthService = require('../service/auth.service');

class AuthController {
    async verifyUser(req, res,) {
      const { token } = req.body;
        if (!token) {
            return res.status(400).json({ status: false, message: 'Token is required' });
        }

      try {
        const userData = await AuthService.verifyUser(token);
        const phone = userData.phone;

        const user = await AuthService.findUserinDb(phone);

        
        if (!user) {   
          return res.status(404).json({ status: false, message: 'User not found' });
        }

        return res.status(200).json({status: true, message: 'User Verified Successfully', user: user });
      } catch (error) {
        return res.status(401).json({ status: false, message: error.message });
      }

    }


}

module.exports = new AuthController();