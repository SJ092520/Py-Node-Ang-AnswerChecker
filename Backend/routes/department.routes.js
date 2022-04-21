const express = require("express");
const departmentService = require("../service/department.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const departmentRouter = express.Router();


departmentRouter.get("/all-departments", (req, res, next) => {
    departmentService.getAllDepartments()
    .then(response => res.send(response))
    .catch(error => next(error));
});

module.exports = departmentRouter;