'use strict';
const Usertime = require('../Models/usertimer');
const nodemailer = require('nodemailer');


module.exports = function(app) {
    app.get('/approved', (req, res) => {
        
        const data = 'leave is approved';
        console.log(data);

        const User = new Usertime({Leavestatus: data});
        User.save()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.status(400).json({message: error.message});
        })
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mohanbabu1013@gmail.com',
                pass: 'welcome@1'
            }
        })

        var mailOptions = {
            from: 'mohanbabu1013@gmail.com',
            to: 'mohaneie88@gmail.com',
            subject: 'Hello',
            text: 'Hello buddy',
            html: `${data}`,
                  
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            }
            transporter.close()

        })
      
    })

    app.get('/cancel', (req, res) => {
        const data = 'Sorry your request is not approved. Further details please contact your HR Team';
        res.json(data);
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mohanbabu1013@gmail.com',
                pass: 'welcome@1'
            }
        })

        var mailOptions = {
            from: 'mohanbabu1013@gmail.com',
            to: 'mohaneie88@gmail.com',
            subject: 'Hello',
            text: 'Hello buddy',
            html: `${data}`,
                  
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
            }
            transporter.close()

        })
      
    })
}