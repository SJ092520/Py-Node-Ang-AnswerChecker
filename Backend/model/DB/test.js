const studentSchema = require('../schemas/student');
console.log(studentSchema);

const userModel = require("../user.model");
const managementModel = require("../management.model");
const studentModel = require("../student.model");

userModel.createUser({ "userId": "1518102126", "password": "1234", "role": 2 });
managementModel.create({ id: "1518MOH", name: "Mohanraj", deptId: "CSE", designation: "Assistant Professor", email: "mohan@", phone: "1234567890" });
studentModel.create({ id: "1518102126", name: "senthil", deptId: "CSE", email: "mohan@", phone: "1234567890" });
console.log("created")