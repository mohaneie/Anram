'use strict';
const nodemailer = require('nodemailer')
const {Leave} = require('../Models');


module.exports = function (app) {

    app.post('/leave', (req, res, next) => {

        const data = req.body;
        const employeeId =req.body.employeeId;
        const from = req.body.from;
        const to = req.body.to;
        const description = req.body.description;
        console.log(data);

        const user = new Leave(data);
        console.log(user);
        user.save()
            .then((result) => {
                res.json(result)
            })
            .catch((next) => {
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
            to: 'muralijaya2011@gmail.com',
            subject: 'Hello',
            text: 'Hello buddy',
            html: `<b>${"Employeecode:"+ " "+employeeId}<br>${"From:"+" "+from}<br>${"To:"+" " +to}<br>${"Description:"+ " " +description}<br><a href= '#'>click-the-Link</a>`

        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(info)
                res.json(info);
            }
            transporter.close()

        })

    })

    app.put('/leave/:id', (req, res, next) => {

        const id = req.params.id;
        const data = req.body;
        Leave.findByIdAndUpdate(id, data, { new: true })
            .then((result) => {
                res.json(result);
            })

            .catch((next) => {
            })

    })

    app.get('/leave/:id', (req, res, next) => {

        const id = req.params.id;
        Leave.findById(id)
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
        })
    })
}