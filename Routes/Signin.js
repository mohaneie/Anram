'use strict';
const { User } = require('../Models');
const Passwordserv = require('../helper/password');

module.exports = function (app) {

    app.post('/getin', async (req, res, next) => {

        const { Email, Password } = req.body;
        console.log(Email, Password);
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
        // User.findOne({ Email })
        //     .then((data) => {


        //         document = data;  // here I'm taking object id for jwt


        //         if (data) {

        //             return Passwordserv.verify(Password, data.Password);

        //         }
        //         res.status(400).json({message: 'email id is not found'})
        //         throw new Error('Employee code is not matching')
        //     })

        //     .then((result) => {

        //         console.log(result);

        //         if (!result) {
        //             res.status(400).json({message: 'password ins not matching'})
        //             throw new Error('password doesnt match')
        //         }

        //      return Passwordserv.token({id:document._id})


        //     })

        //     .then((token) => {
        //        res.json({token})
        //     })
        //     .catch((next) => {
        //     })
    })
}
