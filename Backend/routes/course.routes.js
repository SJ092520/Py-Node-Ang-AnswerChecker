const express = require("express");
const courseService = require("../service/course.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const courseRouter = express.Router();

courseRouter.post("/create", studentAuth, adminAuth, (req, res, next) => {
    courseService.createCourse(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});
module.exports = courseRouter;