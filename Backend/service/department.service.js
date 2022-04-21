const jwt = require('jsonwebtoken');

const departmentModel = require("../model/department.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const departmentService ={};

module.exports = departmentService;