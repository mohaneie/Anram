'use strict';
const {
    Punch
} = require('../Models');

module.exports = function (app) {

    app.get('/punch', (req, res, next) => {
        const query = {};
        const { employeeId, lastPunch } = req.query;
        if (employeeId) {
            Object.assign(query, { employeeId });
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

    function getDateAsYearMonthDate(dateObj) {
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth();
        const date = dateObj.getDate();
        return {
            year,
            month,
            date
        };
    }


    function validateNewPunch(employeeId, currentDateObj) {
        return Punch.find({ employeeId })
            .sort({ startTime: -1 })
            .exec()
            .then(results => {
                const [punch] = results;

                if (!punch) {
                    const isOk = true;
                    return isOk;
                }

                const lastPunchTime = new Date(punch.startTime);
                const lastPunch = getDateAsYearMonthDate(lastPunchTime);
                const currentPunch = getDateAsYearMonthDate(currentDateObj);
                const isToday = Object.keys(currentPunch).every(key => {
                    const currentValue = currentPunch[key];
                    const lastValue = lastPunch[key];
                    return currentValue === lastValue;
                });

                /**
                 * If he already punched today return false
                 * */

                const isOk = !isToday;
                return isOk;
            });

    }


    app.post('/punch', (req, res, next) => {

        const { employeeId } = req.body;
        const now = new Date();

        validateNewPunch(employeeId, now)
            .then(isOk => {
                if (!isOk) {
                    const error = new Error('You Have Already Punched');
                    error.status = 400;
                    return Promise.reject(error);
                }
                const doc = new Punch({ employeeId })
                return doc.save();
            })
            .then(result => {
                res.json(result);
                const time = result.startTime;
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