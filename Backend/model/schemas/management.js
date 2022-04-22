// (Management)
// Id
// Name
// Department
// Designation
// Role
// Mail
// Phone

const managementSchema = {
    "id": { type: String, required: true },
    "name": { type: String, required: true },
    "deptId": { type: String, required: true },
    "designation": { type: String, required: true },
    "role": { type: String, required: true, default: 1 },
    "email": { type: String, required: true },
    "phone": { type: String, required: true },
}

module.exports = managementSchema;