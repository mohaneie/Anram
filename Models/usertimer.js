'use strict';
const mongoose = require('mongoose');
const Timer = mongoose.Schema({
    employeeId: String,
    startTime:Date,
    endTime: Date,
    Leavestatus: String,
}, {timestamp: true})

module.exports = mongoose.model('usertime', Timer);