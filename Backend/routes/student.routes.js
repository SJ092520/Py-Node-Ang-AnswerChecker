const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');
const { setPathAnswerSheet, upload } = require("../middleware/file-system.middleware");

const studentRouter = express.Router();

studentRouter.get("/student-profile/:studentId", studentAuth, (req, res, next) => {
    return userService.getStudentById(studentId)
        .then(response => {
            if (response) {
                return response;
            }
            throw new ApiError("Student not found", 404);
        });
});

studentRouter.put("/answer-sheet-upload/:courseYearSem/:studentId",
    studentAuth,
    setPathAnswerSheet,
    upload.single('file'),
    (req, res, next) => {
        console.log("------", req.file.filename)
        const filledApplication = {
            path: req.file.destination,
            fileName: req.file.filename
        }
        console.log(filledApplication)
        res = filledApplication
        return res
        // publicationService.addFolderPathApplication(filledApplication, req.params.publicationId)
        // .then(response => res.status(201).send(response))
        // .catch(error => next(error));
    });

module.exports = studentRouter;