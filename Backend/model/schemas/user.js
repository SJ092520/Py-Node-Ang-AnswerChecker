// (User)
// Id
// Password
// UserType

const usersSchema = {
    "userId": {type: String, required: true},
    "password": {type: String, required: true},
    "role": {type: String, required: true},
}

module.exports = usersSchema;