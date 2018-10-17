'use strict';

const UserSchema = require('../Models/Signup');

module.exports = function (app) {

    app.post('/forgot', (req, res) => {

        const { Email } = req.body;
        UserSchema.findOne({ Email })
            .then((data) => {
                if (data) {
                    const x = Math.floor((Math.random() * 10000))
                    res.json(x);
                    console.log(x);
                    return UserSchema.findOneAndUpdate({ Email }, { Otp: x }, { new: true });

                }
                res.json(data);
            })

            .catch((error) => {
                res.status(400).json({ message: 'error has occured' });
            })
    })
}