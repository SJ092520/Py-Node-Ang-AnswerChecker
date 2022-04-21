const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const managementRouter = express.Router();


module.exports = managementRouter;