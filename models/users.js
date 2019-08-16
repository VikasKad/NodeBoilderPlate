var mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

var users = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});
users.plugin(timestamp);

module.exports = mongoose.model("users", users, "users");