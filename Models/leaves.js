'use strict';
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
 employeeId: {type: String, required: true},
 leavefromdate: {type: String, required: true},
 leaveuptodate: {type: String, required: true},
 description: {type: String, required: true},
 time : { type : Date, default: Date.now },
 appliedon: {type: String},
 isapproved: {type: String,},
 approvedby: String,
 
})

module.exports = mongoose.model('userleave', UserSchema);