const jwt = require('jsonwebtoken');

const studentModel = require("../model/student.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const studentService ={};

module.exports = studentService;
