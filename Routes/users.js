'use strict';

const User = require('../Models/user');
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
           const data = req.body || {};
           data.Password = hash;
           const user = new User(data);
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

    app.get('/userinfo', (req, res) => {
     
        User.find({})
        .then((result) => {
            res.json(result);
        })

        .catch((error) => {
            res.status(400).json({message: error.message})
        })
    })

    // to update user information

    app.put('/update/:id', (req, res) => {

      const id = req.params.id;
      const data = req.body;
      User.findByIdAndUpdate(id, data, {new : true})
      .then((result) => {
          console.log(result);
      })
      .catch((error) => {
          res.status(400).json({message: error.message})
      })
    })
    // to delete user information 

    app.delete('/del/:id', (req, res) => {

        const id = req.params.id;
        console.log(id);
        User.findByIdAndDelete({'_id': id})
        .then((result) => {
            res.json(result);
            console.log(result)
        })

        .catch((error) => {
            res.status(400).json({message: error.message});
        })

    })
}