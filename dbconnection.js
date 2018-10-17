'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/attendancebase', {useNewUrlParser: true})
.then((data) => {
    console.log('db is connected')
})

.catch(() => {
    console.log('error')
})