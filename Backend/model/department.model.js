const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const departmentModel = {}

departmentModel.getAllDepartments = () => {
    return collection.getCollection(COLLECTION_NAME.DEPARTMENT)
        .then(model => model.find())
        .then(response => response);
};

departmentModel.createDepartment = departmentDetail => {
    return collection.getCollection(COLLECTION_NAME.DEPARTMENT)
        .then(model => model.create(departmentDetail))
        .then(response => response);
};

module.exports = departmentModel;