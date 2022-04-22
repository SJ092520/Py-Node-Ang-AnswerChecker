const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const studentModel = {}

studentModel.createUser = (userDetails) => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.create(userDetails))
        .then(response => response);
}
studentModel.getStudentById = studentId => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.findOne({ studentId }))
        .then(response => response);
}

module.exports = studentModel;