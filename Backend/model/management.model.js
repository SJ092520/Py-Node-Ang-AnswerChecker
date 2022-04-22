const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const managementModel = {}
managementModel.createUser = (userDetails) => {
    return collection.getCollection(COLLECTION_NAME.MANAGEMENT)
        .then(model => model.create(userDetails))
        .then(response => response);
}
managementModel.getManagementById = id => {
    return collection.getCollection(COLLECTION_NAME.MANAGEMENT)
        .then(model => model.findOne({ id }))
        .then(response => response);
}
module.exports = managementModel;