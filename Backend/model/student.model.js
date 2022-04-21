const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const studentModel = {}


studentModel.getStudentById = studentId => {
    return collection.getCollection(COLLECTION_NAME.STUDENT)
        .then(model => model.findOne({studentId}))
        .then(response =>  response);
}

module.exports = studentModel;