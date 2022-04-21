const jwt = require('jsonwebtoken');

const courseModel = require("../model/course.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const courseService ={};

module.exports = courseService;