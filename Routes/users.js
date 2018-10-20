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

    app.get('/userinfo', (req, res) => {
     
        UserSchema.find({})
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
      UserSchema.findByIdAndUpdate({'_id': id}, data, {new : true})
      .then((result) => {
          console.log(result);
      })
      .catch((error) => {
          res.status(400).json({message: error.message})
      })
    })
    // to delete user information 

    app.delete('/delete/:id', (req, res) => {

        const id = req.params.id;
        console.log(id);
        UserSchema.findByIdAndDelete({'_id': id})
        .then((result) => {
            res.json(result);
            console.log(result)
        })

        .catch((error) => {
            res.status(400).json({message: error.message});
        })

    })
}