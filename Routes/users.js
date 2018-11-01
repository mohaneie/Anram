'use strict';

const multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

const {
    User,
} = require('../Models');

const passwordserv = require('../helper/password');

module.exports = function(app) {

    app.post('/users', async (req, res, next) => {

        const data = req.body;
       console.log(data);
       const {Password} = data;

       try {
            const hashPass = await passwordserv.hash(Password)
            const data = req.body || {};
           data.Password = hashPass;
           const user = new User(data);
           const result = await user.save();
           res.json(result);
       } catch (error) {
           next(error)
       }

    })


    //  to retrieve user information

    app.get('/users', async (req, res, next) => {

        try {
            const result = await User.find({});
            res.json(result);
        } catch (error) {
            next(error)
        }
     
    });


    
    app.get('/users/:id', async (req, res, next) => {
        const id = req.params.id;

        try {
        
        const result = await User.findById(id)
        res.json(result);

        }
        
        catch(error) {
         next(error)
        }
    });

    // to update user information

    app.put('/users/:id', upload.single('file'), (req, res, next) => {

      const id = req.params.id;
      const data = req.body;
      console.log(req.file);

      User.findByIdAndUpdate(id, data, {new : true})
      .then((result) => {
          res.json(result)
      })
      .catch(next)
    })
    // to delete user information 

    app.delete('/users/:id', async (req, res, next) => {

        const id = req.params.id;
        try {
        const result = await User.findByIdAndDelete({'_id': id});
        res.json(result);
        }
        catch(error) {
        next(error)
        }

    })
}