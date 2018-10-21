'use strict';
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 employeeId: {type: String, required: true},
 from: {type: Date, required: true},
 to: {type: Date, required: true},
 description: {type: String, required: true},
 isApproved: {type: String, default: 'pending'},
 approvedBy: String,
}, {timestamps: true});

module.exports = mongoose.model('leave', UserSchema);