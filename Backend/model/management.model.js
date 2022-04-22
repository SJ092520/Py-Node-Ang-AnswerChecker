const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const managementModel = {}

managementModel.getManagementById = id => {
    return collection.getCollection(COLLECTION_NAME.MANAGEMENT)
        .then(model => model.findOne({ id }))
        .then(response => response);
}
module.exports = managementModel;