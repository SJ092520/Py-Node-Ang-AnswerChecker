const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const studentRouter = express.Router();


module.exports = studentRouter;