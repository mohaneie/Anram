'use strict';
const nodemailer = require('nodemailer')
const User = require('../Models/leaves');


module.exports = function (app) {

    app.post('/mail', (req, res) => {
        
        const data = req.body;
        console.log(data);

        const user = new User(data);
        console.log(user);
        user.save()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.status(400).json({message: error.message})
        })

    

       
    
        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: 'mohanbabu1013@gmail.com',
        //         pass: 'welcome@1'
        //     }
        // })

        // var mailOptions = {
        //     from: 'mohanbabu1013@gmail.com',
        //     to: 'mohaneie88@gmail.com',
        //     subject: 'Hello',
        //     text: 'Hello buddy',
        //     html: `<b>${employeeId}<br> ${leavefromdate}<br> ${leaveuptodate}<br> ${description}<br> ${appliedon} <br> <button>CLICK-TO-APPROVE</b><br><button>CLICK-TO-CANCEL`
                  
        // };

        // transporter.sendMail(mailOptions, (err, info) => {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log(info)
        //         res.json(info);
        //     }
        //     transporter.close()

        // })

    })

    app.put('/leavupt/:id', (req, res) => {

        const id = req.params.id;
        const data = req.body;
        User.findByIdAndUpdate(id, data, {new: true})
        .then((result) => {
            res.json(result);
        })

        .catch((error) => {
            res.status(400).json({message: error.message});
        })
        
    })
}