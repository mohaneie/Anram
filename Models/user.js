'use strict';
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    Email: {type: String, required: true, unique: true},
    Password: {type: String, required: true},
    Otp: String,
    // EmployeeName: {type: String, required: true},
    FatherName: {type: String, required: true},
    Address: {type: String, required: true},
    PermananentAddress: {type: String, required: true},
    AdhaarNo: {type: String, required: true},
    PancardNo: {type: Number, required: true},
    EmployeeContactNo: {type: Number, required: true},
    EmergencyContactNo: {type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);