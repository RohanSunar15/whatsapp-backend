const User = require('../model/user.model')


class UserServices{
    
    static async getAllUsers(){
        return await User.find();
    };

    static async getUserByPhoneNumber(phonenumber) {
        return await User.findOne({phone : phonenumber});
    };

    static async  updateUser(id, updateData){
        return await User.findByIdAndUpdate(id, updateData, { new: true });
    };
    
    static async  createUser(userData){
        const newUser = new User(userData);
        return await newUser.save();
    };


}



module.exports = UserServices;