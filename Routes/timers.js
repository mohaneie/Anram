'use strict';
const {
    Punch
} = require('../Models');

module.exports = function (app) {

    app.post('/punch', (req, res, next) => {

        const { employeeId } = req.body;

        const doc = new Punch({ employeeId })
        doc.save()
            .then(result => {
                res.json(result);
                console.log(result)
            })
            .catch(next)

    })



    app.get('/punch/:id', (req, res, next) => {

        const id = req.params.id;
        console.log(id);
        Punch.findOne({ '_id': id })
            .then((result) => {
                res.json(result)
            })
            .catch(next);
    });

    /**
     *  Update Endtime On User
     * */
    app.put('/punch/:id', (req, res) => {
        const { id } = req.params;
        const { endTime } = req.body;
        Punch.findByIdAndUpdate(id, { endTime }, { new: true }).exec()
            .then(result => {
                res.json(result)
            })
            .catch(next);

    })
}