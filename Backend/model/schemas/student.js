const studentSchema = {
    "id": { type: String, required: true },
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": { type: String, required: true },
    "deptId": { type: String, required: true },
    "role": { type: String, required: true, default: 2 },
    "semester": {
        type: {
            "semesterId": {
                type: [
                    {
                        type: {
                            "semYear": { type: String, required: true },
                            "courseId": { type: String, required: true },
                            "marks": { type: { "internal": { type: Number }, "external": { type: Number } } },
                            "isElective": { type: Boolean, required: true },
                        }
                    }
                ]
            },
        }
    },
};
module.exports = studentSchema;

