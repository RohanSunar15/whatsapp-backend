const User = require('../model/user.model')


class UserServices{
    
    static async  createUser(userData){
        const newUser = new User(userData);
        return await newUser.save();
    };

    static async  updateUser(id, updateData){
        return await User.findByIdAndUpdate(id, updateData, { new: true });
    };
    
    

}



module.exports = UserServices;