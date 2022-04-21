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


module.exports = userModel;