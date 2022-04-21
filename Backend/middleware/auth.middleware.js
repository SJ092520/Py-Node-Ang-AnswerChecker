const jwt = require('jsonwebtoken');
const {ApiError} = require('../objectCreator/objectCreator');
const {JWT_KEY, ROLE_WITH_ADMIN_AUTH} = require('../keys/constants');

const studentAuth = (req,res,next)=>{
   try {
        const token = req.headers.authorization.split(" ")[1]; 
        const decoded = jwt.verify(token, JWT_KEY.SECRET);
        req.auth = {userId: decoded.userId, userRole: decoded.userRole};
        next();
    } catch(error){
        throw new ApiError("Authentication Failed", 401);
    }
};

const adminAuth = (req,res,next) =>{ 
    try{
        if( !ROLE_WITH_ADMIN_AUTH.includes(req.auth.userRole)) throw 'Forbidden Access';
        next();
    }catch(error){
        throw new ApiError(error, 403);
    }
};


module.exports = {studentAuth, adminAuth};