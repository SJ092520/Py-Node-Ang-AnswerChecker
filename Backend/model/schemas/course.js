const courseSchema = {
    "id": { type: String, required: true },
    "name": { type: String, required: true },
    "deptId": { type: String, required: true },
    "credits": { type: Number, required: true },
    "role": { type: String, required: true, default: 1 },
    "description": { type: String, required: true },
    "answerKey": {
        type: [{
            "courseYearSemId": { type: String, required: true },
            "questionPaperPath": {
                "fileName": { type: String, required: true },
                "filePath": { type: String, required: true }
            },
            "answerKeyData": {
                "questionId": { type: String, required: true },
                "AnswerType": { type: String, required: true, enum: ["MCQ", "DES", "DIAG"] },
                "checkFactor": { type: String, required: true },
                "maxMark": { type: String, required: true },
                "suggestion": { type: Boolean, required: true }
            },
        }]
    },
    "answerKeyHistory": { type: String, required: true }
}

module.exports = courseSchema;