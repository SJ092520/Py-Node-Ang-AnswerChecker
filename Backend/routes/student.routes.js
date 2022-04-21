const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const studentRouter = express.Router();

studentRouter.get("/student-profile/:studentId", studentAuth, (req, res, next) => {
    return userService.getStudentById(studentId)
        .then(response => {
            if(response) {
                return response;
            }
            throw new ApiError("Student not found", 404);
        });
    
    });

module.exports = studentRouter;