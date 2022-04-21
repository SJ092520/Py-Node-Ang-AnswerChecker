const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const courseRouter = express.Router();


module.exports = courseRouter;