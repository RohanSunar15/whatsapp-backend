const userModel = require('../model/user.model');
const UserService = require('../service/user.service');

class UserController {
  async getAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json({ status: true, data: users });
    } catch (error) {
      next(error);
    }
  }

  async getUserByPhoneNumber(req, res, next) {
    try {
      const phone = req.params.phone;
    
      const user = await UserService.getUserByPhoneNumber(phone);
      console.log(user);
      if (!user) {
      return res.status(404).json({ status: false, message: 'User not found' });
    }
    
    res.status(200).json({ status: true, data: user });


    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const updatedUser = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json({ status: true, user: updatedUser });
    } catch (error) {
      next(error);
    }
  }

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