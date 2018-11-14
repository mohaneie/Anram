'use strict';
const { User } = require('../Models');
const Passwordserv = require('../helper/password');

module.exports = function (app) {

    app.post('/getin', async (req, res, next) => {

        const { Email, Password } = req.body;

        let document = {};
        try {
            const data = await User.findOne({ Email })
            if (!data) {
                const error = new Error('email is not found');
                return next(error);
            }

            const result = await Passwordserv.verify(Password, data.Password);
            if (!result) {
                return res.status(400).json({ message: 'password is not matching' })

            }
            const tokengen = await Passwordserv.token({ id: document._id });
            res.json(tokengen);


        }
        catch (error) {
            next(error);
        }
       
    })
}
