'use strict';
const nodemailer = require('nodemailer')

module.exports = function (app) {

    app.post('/mail', (req, res) => {

        const name = req.body.name;
        const email = req.body.email;
        const leavefromdate = req.body.leavefromdate;
        const todate = req.body.todate;
        const description = req.body.description;
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
            html: `<b>${name}<br> ${email}<br> ${leavefromdate}<br> ${todate}<br> ${description}<br><button>CLICK-TO-APPROVE</b>`
                  
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