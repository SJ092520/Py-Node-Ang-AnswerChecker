const collection = require('./DB/connection');
const { COLLECTION_NAME } = require('../keys/constants');

const courseModel = {}

courseModel.getCourseById = courseId => {
    return collection.getCollection(COLLECTION_NAME.COURSE)
        .then(model => model.findOne({courseId}))
        .then(response =>  response);
}

courseModel.createCourse = courseDetails => {
    return collection.getCollection(COLLECTION_NAME.COURSE)
        .then(model => model.create(courseDetails))
        .then(response =>  response);
}


module.exports = courseModel;