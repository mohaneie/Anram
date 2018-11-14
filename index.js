'use strict';
const express = require('express');
const app = express();
const port = 2021;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./dbconnection');
// const SignupRoutes = require('./Routes/Signup');
const SigninRoutes = require('./Routes/Signin');
const ForgotRoutes = require('./Routes/Forgotpassword');
const ResetRoutes = require('./Routes/Resetpassword');
const ChangepassRoutes = require('./Routes/changepassword');
const UserRoutes = require('./Routes/users');
const timerRoutes = require('./Routes/timers');
const leaveRoutes = require('./Routes/leave');


// SignupRoutes(app);
SigninRoutes(app);
ForgotRoutes(app);
ResetRoutes(app);
ChangepassRoutes(app);
UserRoutes(app);
timerRoutes(app);
leaveRoutes(app);
// leaveapprovedRoutes(app);




app.use((error, req, res, next) => {
    console.error(error);
    res.status(400).json({ message: error.message });
})


app.listen(port, () => {
    console.log('server is started at 2021');
})