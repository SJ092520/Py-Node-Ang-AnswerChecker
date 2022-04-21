const jwt = require('jsonwebtoken');

const departmentModel = require("../model/department.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const departmentService ={};
departmentService.getAllDepartments = () => {
    return departmentModel.getAllDepartments()
        .then(response => {
            if(response) return response;
            throw new ApiError("Departments not found", 404);
        });
};
module.exports = departmentService;