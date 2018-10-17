'use strict';
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    EmployeeCode: {type: Number, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true},
    Otp: {type: Number},
});

module.exports = mongoose.model('attendance', UserSchema);