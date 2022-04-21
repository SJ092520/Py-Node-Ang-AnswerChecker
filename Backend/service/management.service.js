const jwt = require('jsonwebtoken');

const managementModel = require("../model/management.model");
const { ApiError } = require('../objectCreator/objectCreator');
const { JWT_KEY } = require("../keys/constants");


const managementService ={};

module.exports = managementService;