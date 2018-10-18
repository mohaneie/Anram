'use strict';
const UserSchema = require('../Models/user');
const passwordserv = require('../helper/password');


module.exports = function(app) {
    app.post('/update', (req, res) => {
        const {Email, Password} = req.body;
        console.log(Email, Password);
        UserSchema.findOne({Email})
        .then((data)=> {
            if(!data) {
                res.status(419).json({message: 'Email is not found'})
            }
           return passwordserv.hash(Password)

        })
        .then((hash) => {
            console.log(hash);
             req.body.Password = hash;
             console.log(req.body.Password)
             const some = new UserSchema(req.body);
             return some.save()
        })
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
            res.status(400).json({message: error.message})
        })
    })
}
    
    

