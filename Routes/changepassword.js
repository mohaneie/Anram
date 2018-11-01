'use strict';
const User = require('../Models/user');
const passwordserv = require('../helper/password');


module.exports = function (app) {
    app.post('/update', async (req, res, next) => {
        const { Email, Password } = req.body;
        try {
            const data = await User.findOne({ Email })
            if (!data) {
                return next('email is not found')
            }

            const hashpass = await passwordserv.hash(Password)
            req.body.Password = hashpass;
            const some = new User(req.body);
            const result = await some.save();
            res.json(result);

        }

        catch (error) {
            next(error)
        }

    })
}



