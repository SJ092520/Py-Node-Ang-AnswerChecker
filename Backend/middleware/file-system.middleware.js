const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const path = `./FileSystem/${req.folderPath}`;
        let folderNames = path.split('/');
        let currentPath = '.';
        let i = 1;
        do {
            currentPath += `/${folderNames[i]}`;
            if (!fs.existsSync(currentPath)) {
                fs.mkdirSync(currentPath);
            }
            ++i;
        } while (i < folderNames.length);
        callback(null, path)
    },
    filename: (req, file, callback) => {
        let fullName = file.originalname;
        let fileName = fullName.split(".")[0]
        let ext = fullName.split(".")[1];
        callback(null, `${fileName}-${Date.now()}.${ext}`)
    }
});

const upload = multer({ storage: storage });

const setPathAnswerSheet = (req, res, next) => {
    try {
        req.folderPath = `/${req.params.courseYearSem}/AnswerSheet/${req.params.studentId}`;
        next();
    } catch (error) {
        throw new ApiError(error, 403);
    }
};
const setPathAnswerKey = (req, res, next) => {
    try {
        req.folderPath = `/${req.params.courseYearSem}/AnswerKey`;
        next();
    } catch (error) {
        throw new ApiError(error, 403);
    }
};
const setPathQuestionPaper = (req, res, next) => {
    try {
        req.folderPath = `/${req.params.courseYearSem}/QuestionPaper`;
        next();
    } catch (error) {
        throw new ApiError(error, 403);
    }
};

module.exports = { upload, setPathAnswerKey, setPathAnswerSheet, setPathQuestionPaper };