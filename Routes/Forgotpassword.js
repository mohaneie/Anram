'use strict';

const User = require('../Models/user');

module.exports = function (app) {

    app.post('/forgot', (req, res) => {

        const { Email } = req.body;
        User.findOne({ Email })
            .then((data) => {
                if (data) {
                    const x = Math.floor((Math.random() * 10000))
                    res.json(x);
                    console.log(x);
                    return UserSchema.findOneAndUpdate({ Email }, { Otp: x }, { new: true });

                }
                res.json(data);
            })

            .catch((next) => {
            })
    })
}