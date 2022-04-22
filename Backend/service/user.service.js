const jwt = require('jsonwebtoken');

const userModel = require("../model/user.model");
const { JWT_KEY, USER_TYPE } = require("../keys/constants");
const { ApiError } = require('../objectCreator/objectCreator');
const studentModel = require('../model/student.model');
const managementModel = require('../model/management.model');


const userService ={};


userService.loginUser = async loginDetails  => {
    try{
        const userData = await userModel.getUserById(loginDetails.userId);
        if(!userData) throw 401;
        else{
            const isNotMatch = loginDetails.password.localeCompare(userData.password);
            if (isNotMatch)  throw 401; 
            else {
                const message = `Hi ${userData.userId}`;
                const payload = { userId: userData.userId, role: userData.role };
                const token = jwt.sign(payload, JWT_KEY.SECRET);
                if(userData.role == USER_TYPE.MANAGEMENT){
                    return managementModel.getManagementById(userData.userId).then(response =>{
                        return {message,payload,token,userData:response}
                    });
                }
                else{
                    return studentModel.getStudentById(userData.userId).then(response => {
                        return {message,payload,token,userData:response}
                    });
                }
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
