'use strict';
const {
    Punch
} = require('../Models');

module.exports = function (app) {

    app.get('/punch', (req, res, next) => {
        const query = {};
        const {employeeId, lastPunch} = req.query;
        if (employeeId) {
            Object.assign(query, {employeeId});
        }

        let dbQuery = Punch.find(query)
            .sort({ createdAt: 1 });

            if (lastPunch) {
                dbQuery = dbQuery.limit(1)
            
            }

            dbQuery.exec()
            .then((results) => {
                res.json(results)
            })
            .catch(next);
    });

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



    // app.get('/punch/:id', (req, res, next) => {

    //     const id = req.params.id;
    //     Punch.findById(id)
    //         .then((result) => {
    //             res.json(result)
    //         })
    //         .catch(next);
    // });

    /**
     *  Update Endtime On User
     * */
    app.put('/punch/:id', (req, res, next) => {
        const { id } = req.params;
        const endTime = new Date();
        Punch.findByIdAndUpdate(id, { endTime }, { new: true }).exec()
            .then(result => {
                res.json(result)
            })
            .catch(next);

    })
}