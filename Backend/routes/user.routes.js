const express = require("express");
const userService = require("../service/user.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const userRouter = express.Router();


module.exports = userRouter;