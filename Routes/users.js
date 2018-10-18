'use strict';

const UserSchema = require('../Models/user');
const passwordserv = require('../helper/password');

module.exports = function(app) {

    app.post('/users', (req, res) => {

        const data = req.body;
       console.log(data);
       const {Password} = data;
       console.log(Password);

       passwordserv.hash(Password)

       .then((hash) => {
           console.log(hash);
           req.body.Password = hash;
           const user = new UserSchema(req.body);
           return user.save()
       })
       .then((result) => {
           res.json(result);
       })
       .catch((error) => {
           res.status(400).json({message: error.message});
       })
    })


    //  to retrieve user information

    app.get('/', (req, res) => {
     
    })

    // to update user information

    app.put('/', (req, res) => {

    })

    // to delete user information 

    app.delete('/', (req, res) => {

    })
}