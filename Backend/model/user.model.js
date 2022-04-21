const collection = require('./DB/connection');
const { COLLECTION_NAME } = require("../keys/constants");
const userModel = {}

// Create user function
userModel.createUser = (userDetails) => {
    return collection.getCollection(COLLECTION_NAME.USER)
        .then(model => model.create(userDetails))
        .then(response =>  response);
}

userModel.getUserById = userId => {
    return collection.getCollection(COLLECTION_NAME.USER)
        .then(model => model.findOne({userId}))
        .then(response =>  response);
}
userModel.editUser=(userDetails,userId)=>{
    return collection.getCollection(COLLECTION_NAME.USERS)
        .then(model => model.findOneAndUpdate( {userId}, {$set:{...userDetails}}, {new:true}) )
        .then(response =>  response);
}

module.exports = userModel;