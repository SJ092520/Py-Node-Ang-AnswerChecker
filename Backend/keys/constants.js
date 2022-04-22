const COLLECTION_NAME = {
    STUDENT: "Student",
    MANAGEMENT: "Management",
    COURSE: "Course",
    DEPARTMENT: "Department",
    USER: "User",
};
const JWT_KEY = {
    SECRET:"AI_ANSWER_KEY"
}
const USER_TYPE = {
    MANAGEMENT:1,
    STUDENT:2,
}
const ROLE_WITH_ADMIN_AUTH = [1];
module.exports = {
    COLLECTION_NAME,
    JWT_KEY,
    ROLE_WITH_ADMIN_AUTH,
    USER_TYPE
};