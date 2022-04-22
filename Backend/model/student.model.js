const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const studentModel = {}

studentModel.create = (userDetails) => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.create(userDetails))
        .then(response => response);
}
studentModel.getStudentById = registerNo => {
    console.log("inside model",registerNo)
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.findOne({"registerNo": registerNo }))
        .then(response => response);
}

module.exports = studentModel;