const mongoose = require("mongoose");
const { COLLECTION_NAME } = require('../../keys/constants');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

// Schema imports
const studentObj = require('../schemas/student');
const userObj = require('../schemas/user');
const departmentObj = require('../schemas/department');
const managementObj = require('../schemas/management');


const connection = {};
const usersSchema = new Schema(userObj, { collection: "User", timestamps: true });
const studentSchema = new Schema(studentObj, { collection: "Student", timestamps: true });
const departmentSchema = new Schema(departmentObj, { collection: "Department", timestamps: true });
const managementSchema = new Schema(managementObj, { collection: "Management", timestamps: true });


connection.getCollection = collectionName => {
    const DB_HOST = "mongodb://localhost:27017";
    return mongoose.connect(`${DB_HOST}/Py-AI-Answer-System`,
        { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
            switch (collectionName) {
                case COLLECTION_NAME.USER: return db.model(collectionName, usersSchema);
                case COLLECTION_NAME.STUDENT: return db.model(collectionName, studentSchema);
                case COLLECTION_NAME.DEPARTMENT: return db.model(collectionName, departmentSchema);
                case COLLECTION_NAME.MANAGEMENT: return db.model(collectionName, managementSchema);
            }
        }).catch(err => {
            let error = new Error("Could not connect to database");
            error.status = 500;
            throw error;
        });
}

module.exports = connection;