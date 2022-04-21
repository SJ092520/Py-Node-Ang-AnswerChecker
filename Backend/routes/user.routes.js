const express = require("express");
const userService = require("../service/user.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');

const userRouter = express.Router();

userRouter.post("/login", (req, res, next) => {
    userService.loginUser(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});

userRouter.post("/create", userAuth, adminAuth, (req, res, next) => {
    userService.createUser(req.body)
    .then(response => res.send(response))
    .catch(error => next(error));
});

userRouter.put("/edit/:userId", userAuth, adminAuth, (req, res, next) => {
    userService.editUser(req.body,req.params.userId)
    .then(response => res.send(response))
    .catch(error => next(error));
});

module.exports = userRouter;