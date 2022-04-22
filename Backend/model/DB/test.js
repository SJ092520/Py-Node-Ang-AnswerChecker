const studentSchema = require('../schemas/student');
console.log(studentSchema);

const userModel = require("../user.model");

userModel.createUser({"userId":"1518102126","password":"1234","userType":2});
console.log("created")