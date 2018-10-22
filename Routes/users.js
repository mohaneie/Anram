'use strict';

const {
    User,
} = require('../Models');

const passwordserv = require('../helper/password');

module.exports = function(app) {

    app.post('/users', (req, res, next) => {

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
       .catch((next) => {
       })
    })


    //  to retrieve user information

    app.get('/userinfo', (req, res, next) => {
     
        User.find({})
        .then((result) => {
            res.json(result);
        })

        .catch((next) => {
        })
    })

    // to update user information

    app.put('/update/:id', (req, res, next) => {

      const id = req.params.id;
      const data = req.body;
      User.findByIdAndUpdate(id, data, {new : true})
      .then((result) => {
          console.log(result);
      })
      .catch((next) => {
      })
    })
    // to delete user information 

    app.delete('/del/:id', (req, res, next) => {

        const id = req.params.id;
        console.log(id);
        User.findByIdAndDelete({'_id': id})
        .then((result) => {
            res.json(result);
            console.log(result)
        })

        .catch((next) => {
        })

    })
}