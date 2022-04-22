const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const studentModel = {}

studentModel.create = (userDetails) => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.create(userDetails))
        .then(response => response);
}
studentModel.getStudentById = id => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.findOne({"id": id }))
        .then(response => {console.log(response); return response});
}

module.exports = studentModel;