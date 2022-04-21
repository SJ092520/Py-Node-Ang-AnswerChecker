const jwt = require('jsonwebtoken');

const studentModel = require("../model/student.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const studentService ={};

studentService.getStudentById() = (studentId) => {
    return studentModel.getStudentById(studentId)
        .then(response => {
            if(response) {
                return response;
            }
            throw new ApiError("Student not found", 404);
        });
    }

module.exports = studentService;
