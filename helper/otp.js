'use strict';
const nodemailer = require('nodemailer');


function myfun(OTP) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //true --> will use ssl
        auth: {
            user: 'mohanbabu1013@gmail.com',
            pass: 'welcome@1',
        }
    });

    var mailOptions = {
        from: 'mohanbabu1013@gmail.com',
        to: 'mohaneie88@gmail.com',
        subject: 'Hello',
        text: 'Hello world',
        html: `${'OTP:' + OTP}`,
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
        transporter.close();
    });
}

module.exports = myfun;