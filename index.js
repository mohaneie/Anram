'use strict';
const express = require('express');
const app = express();
const port = 2021;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');



app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require('./dbconnection');
// const SignupRoutes = require('./Routes/Signup');
const SigninRoutes = require('./Routes/Signin');
const ForgotRoutes = require('./Routes/Forgotpassword');
const ChangepassRoutes = require('./Routes/changepassword');
const UserRoutes = require('./Routes/users');
const timerRoutes = require('./Routes/timers');
const leaveRoutes = require('./Routes/leave');

app.use((req, res, next) => {

	console.log(req.headers);
	const data =  req.headers.authorization;
	console.log('token:::::',data);

	next();
})

// SignupRoutes(app);
SigninRoutes(app);
ForgotRoutes(app);
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