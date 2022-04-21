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

module.exports = userService;
