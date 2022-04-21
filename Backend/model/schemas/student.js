const studentSchema = {
    "registerNo": { type: String, required: true },
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": { type: String, required: true },
    "deptId": { type: String, required: true },
    "semester": { type: {
        "semesterId": { 
            type: [
                { 
                    type: {
                        "semYear": { type: String, required: true },
                        "courseId": { type: String, required: true },
                        "marks":{ type:{"internal":{type:Number},"external":{type:Number}}},
                        "isElective":{type:Boolean,required:true},
                    }
                }
        ] },
    } },
};
module.exports = studentSchema;

