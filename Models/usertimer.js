'use strict';
const mongoose = require('mongoose');
const Timer = mongoose.Schema({
    Email: String,
    StartTime:Date,
    EndTime: Date,
    Leavestatus: String,
})

module.exports = mongoose.model('usertime', Timer);