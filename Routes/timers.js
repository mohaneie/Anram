'use strict';
const Timer = require('../Models/usertimer');

module.exports = function (app) {

    app.post('/start', (req, res) => {

        const { Email, StartTime } = req.body;
        const Start = new Date();
        const y = Start + (Start.getTimezoneOffset());
        console.log(y);
        const z = y.split(' ');
        const result = z.splice(0, 5);
        console.log(result);
        req.body.StartTime = result;
        const m = req.body;
        const usertime = new Timer(m);
        usertime.save()
            .then((data) => {
                console.log(data)
                res.json(data)
            })
            .catch((error) => {
                res.status(400).json({ message: error.message })
            })

    })

    app.post('/End', (req, res) => {

        const { Email, EndTime } = req.body;
        const Start = new Date();
        const y = Start + (Start.getTimezoneOffset());
        console.log(y);
        const z = y.split(' ');
        const result = z.splice(0, 5);
        console.log(result);
        req.body.EndTime = result;
        console.log(req.body.EndTime);
        const m = req.body;
        const usertime = new Timer(m);
        usertime.save()
            .then((data) => {
                console.log(data)
                res.json(data)
            })
            .catch((error) => {
                res.status(400).json({ message: error.message })
            })

    })

   app.get('/user/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);
    Timer.findOne({'_id': id})
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.status(400).json({message: error.message})
    })


   })
}