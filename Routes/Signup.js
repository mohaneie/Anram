'use strict';
const UserSchema = require('../Models/user');
const Passwordserv = require('../helper/password');

module.exports = function (app) {

    app.post('/', (req, res) => {
        
        const {Email, Password} = req.body;
        UserSchema.findOne({Email})
        .then((data) => {
          if(data) {
              return res.status(419).json({message: 'user is already existed'})
          }

           return Passwordserv.hash(Password);
        })

        .then((hash) => {
            console.log(hash);
         req.body.Password = hash;
         console.log(req.body.Password)
         const userschema = new UserSchema(req.body);
          return userschema.save()
        })

        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
            return res.status(400).json({message: 'error message'})
        })
    })


}