const userModel = require('../model/user.model');
const UserService = require('../service/user.service');

class UserController {
  // Create User
  async createUser(req, res, next) {
    try {
    const { phone, name, profileImage } = req.body;

    if (!phone || !name) {
      return res.status(400).json({ status: false, message: 'Phone and name are required' });
    }

    const userData = { phone, name, profileImage };
    const user = await UserService.createUser(userData);

    res.status(200).json({ status: true, user });
  } catch (error) {
    next(error);
  }
}
};

module.exports = new UserController();