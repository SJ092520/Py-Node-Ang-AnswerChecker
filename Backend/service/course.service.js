const jwt = require('jsonwebtoken');

const courseModel = require("../model/course.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const courseService ={};

courseService.createCourse = (courseDetails) => {
    return courseModel.getCourseById(courseDetails.courseId)
        .then(response => {
            if(response) throw new ApiError("CourseID already exist",400);
             return true;
        })
        .then( canCreate => {
            if(canCreate){
                return courseModel.createCourse(courseDetails)
                .then(response => ({message: `Course #${response.courseId} created successfully`}) )
            }
        })
}

module.exports = courseService;