// const studentSchema = require('../schemas/student');
// console.log(studentSchema);

// const userModel = require("../user.model");
// const managementModel = require("../management.model");
// const studentModel = require("../student.model");

// userModel.createUser({ "userId": "1518102126", "password": "1234", "role": 2 });
// managementModel.create({ id: "1518MOH", name: "Mohanraj", deptId: "CSE", designation: "Assistant Professor", email: "mohan@", phone: "1234567890" });
// studentModel.create({ id: "1518102126", name: "senthil", deptId: "CSE", email: "mohan@", phone: "1234567890", batch: 2022 });
// console.log("created")

// var myPythonScriptPath = reqPath+'/test.py';
// console.log(reqPath)
// // Use python shell
// var {PythonShell} = require('python-shell');
// var pyshell = new PythonShell(myPythonScriptPath);
// pyshell.on('message', function (message) {
//     console.log(message);
// });
// pyshell.end(function (err) {
//     if (err){
//         throw err;
//     };

//     console.log('finished');
// });

path = require('path')
let pythonPath = path.join(__dirname, '../../../Python');
let filePath = path.join(__dirname, '../../FileSystem/U15CS907R20227/AnswerSheet/1518102126/1518102126-U15CS927R-1650769321130.pdf');
let fileFolderPath = path.join(__dirname, '../../FileSystem/U15CS907R20227/AnswerSheet/1518102126/');

const {PythonShell} = require('python-shell');

let options = {
    mode: 'text',
    pythonPath: '/opt/homebrew/Caskroom/miniforge/base/bin/python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: pythonPath,
    args: [filePath,fileFolderPath]
};

PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});