'use strict';
const express = require('express');
const app = express();
const port = 2021;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const SignupModel = require('./Models/user');
const connects = require('./dbconnection');
const SignupRoutes = require('./Routes/Signup');
const SigninRoutes = require('./Routes/Signin');
const ForgotRoutes = require('./Routes/Forgotpassword');
const ResetRoutes = require('./Routes/Resetpassword');
const ChangepassRoutes = require('./Routes/changepassword');
const UserRoutes = require('./Routes/users');
const UsertimeModel = require('./Models/usertimer');
const timerRoutes = require('./Routes/timers');
const leaveRoutes = require('./Routes/leave');
const leaveapprovedRoutes = require('./Routes/userleaveapproved');
const UserleaveModel = require('./Models/leaves');


SignupRoutes(app);
SigninRoutes(app);
ForgotRoutes(app);
ResetRoutes(app);
ChangepassRoutes(app);
UserRoutes(app);
timerRoutes(app);
leaveRoutes(app);
leaveapprovedRoutes(app);







app.listen(port, () => {
    console.log('server is started at 2021');
})