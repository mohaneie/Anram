'use strict';
const nodemailer = require('nodemailer')
const { Leave } = require('../Models');


module.exports = function (app) {

    app.post('/leave', async (req, res, next) => {

        const data = req.body;
        const employeeId = req.body.employeeId;
        const from = req.body.from;
        const to = req.body.to;
        const description = req.body.description;
        console.log(data);
        var x = (Object.keys(data).length == 0)
        console.log(x);
        if (x == false) {
            const user = new Leave(data);
            console.log(user);
            try {
                const result = await user.save()
                res.json(result)

            }
             catch(error) {
               next(error)
             }

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
                html: `<b>${"Employeecode:" + " " + employeeId}<br>${"From:" + " " + from}<br>${"To:" + " " + to}<br>${"Description:" + " " + description}<br><a href= 'http://localhost:4200/'>click-the-Link-ToApprove</a>`

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
        }
        else {
            res.status(400).json('data is empty please fill the data before submit button')
        }





    })

    app.put('/leave/:id', async (req, res, next) => {

        const id = req.params.id;
        const data = req.body;

        try {
        
        const result = await Leave.findByIdAndUpdate(id, data, { new: true })
        res.json(result);

        }
        catch(error) {
            next(error)
        }
    })

    app.get('/leave/:id', async (req, res, next) => {

        const id = req.params.id;
        try {
        const result = await Leave.findById(id) 
        res.json(result)
        }

      catch(error) {
          next(error);
      }
    
    })


}