const studentSchema = {
    "id": { type: String, required: true },
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": { type: String, required: true },
    "deptId": { type: String, required: true },
    "role": { type: String, required: true, default: 2 },
    "batch": { type: Number, required: true, Range: [1990, 2100] },
    "semester": [{
        "course": [{
            "year": { type: String, required: true },
            "courseId": { type: String, required: true },
            "courseYearSemId": { type: String, required: true },
            "marks": {
                type: {
                    "internal": { type: Number },
                    "external": { type: Number }
                }
            },
            "answerSheet": {
                type: {
                    "question": [{
                        "questionId": { type: String, required: true },
                        "answer": { type: String, required: true },
                        "mark": { type: Number, required: true },
                    }],
                    "total": { type: Number, required: true },
                    "fileName": { type: String, required: true },
                    "filePath": { type: String, required: true }
                }
            },
            "isElective": { type: Boolean, required: true },
            "arrear": { type: Boolean, required: true, default: false },
            "uploadDate": { type: Date, required: true, default: Date.now() },
        }]
    }],
};
module.exports = studentSchema;

