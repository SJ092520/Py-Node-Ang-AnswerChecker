const studentSchema = require('../schemas/student');
console.log(studentSchema);

const userModel = require("../user.model");

userModel.createUser();
console.log("created")