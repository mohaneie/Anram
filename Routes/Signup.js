// 'use strict';
// const User = require('../Models/user');
// const Passwordserv = require('../helper/password');

// module.exports = function (app) {

//     app.post('/', (req, res) => {
        
//         const {Email, Password} = req.body;
//         User.findOne({Email})
//         .then((data) => {
//           if(data) {
//               return res.status(419).json({message: 'user is already existed'})
//           }

//            return Passwordserv.hash(Password);
//         })

//         .then((hash) => {
//             console.log(hash);
//          req.body.Password = hash;
//          console.log(req.body.Password)
//          const user = new User(req.body);
//           return user.save()
//         })

//         .then((data) => {
//             res.json(data)
//         })
//         .catch(next)
//     })


// }