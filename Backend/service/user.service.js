const jwt = require('jsonwebtoken');

const userModel = require("../model/user.model");
const { JWT_KEY } = require("../keys/constants");
const { ApiError } = require('../objectCreator/objectCreator');


const userService ={};


userService.loginUser = async loginDetails  => {
    try{
        const userData = await userModel.getUserById(loginDetails.userId);
        if(!userData) throw 401;
        else{
            const isNotMatch = loginDetails.password.localeCompare(userData.password);
            if (isNotMatch)  throw 401; 
            else {
                const message = `Hi ${userData.userName}`;
                const payload = { userId: userData.userId, userType: userData.userType };
                const token = jwt.sign(payload, JWT_KEY.SECRET);
                const user = {
                    userId: userData.userId,
                    userType: userData.userType
                }
                return { message, token, user };
            }
        }
    }
    catch(statusCd){
        throw new ApiError("Invalid username or password", statusCd);
    }
}
userService.createUser = userDetails => {
    return userModel.getUserById(userDetails.userId)
        .then(response => {
            if(response) throw new ApiError("UserId already exist",400);
             return true;
        })
        .then( canCreate => {
            if(canCreate){
                return userModel.createUser(userDetails)
                .then(response => ({message: `User #${response.userId} created successfully`}) )
            }
        })
} 
userService.editUser = (userDetails,userId) => {
        return userModel.editUser(userDetails,userId)
        .then(response => ({message: `User #${response.userId} Edited successfully`}) )
            
        
} 

module.exports = userService;
