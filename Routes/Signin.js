'use strict';
const User = require('../Models/user');
const Passwordserv = require('../helper/password');


module.exports = function (app) {

    app.post('/getinfo', (req, res) => {

        const { Email, Password } = req.body;
        console.log(Email, Password);
        let document = {};
        User.findOne({ Email })
            .then((data) => {

            
                document = data;  // here I'm taking object id for jwt


                if (data) {

                    return Passwordserv.verify(Password, data.Password);

                }
                throw new Error('Employee code is not matching')
            })

            .then((result) => {

                console.log(result);

                if (!result) {
                    throw new Error('password doesnt match')
                }

             return Passwordserv.token({id:document._id})
             

            })

            .then((token) => {
               res.json({token})
            })
            .catch((error) => {
                res.json({ message: 'error' })
            })

    })
}

