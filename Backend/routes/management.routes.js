const express = require("express");
const userService = require("../service/management.service");
const { studentAuth, adminAuth } = require('../middleware/auth.middleware');
const { setPathAnswerKey, upload } = require("../middleware/file-system.middleware");

const managementRouter = express.Router();

managementRouter.put("/answer-key/:courseYearSem",
    studentAuth,
    setPathAnswerKey,
    upload.single('file'),
    (req, res, next) => {
        console.log("------", req.file.filename)
        const filledApplication = {
            path: req.file.destination,
            fileName: req.file.filename
        }
        console.log(filledApplication)
        return res.status(201).send(response);
        // publicationService.addFolderPathApplication(filledApplication, req.params.publicationId)
        // .then(response => res.status(201).send(response))
        // .catch(error => next(error));
    });

module.exports = managementRouter;