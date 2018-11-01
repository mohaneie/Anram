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


    async function validateNewPunch(employeeId, currentDateObj) {
        try {
          
            const result = await Punch.find({ employeeId })
            .sort({ startTime: -1 })
            .exec()
            const [punch] = result;
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

        }
       catch(error) {
        //    next(error)
        console.log(error);
       }

    }


    app.post('/punch', async (req, res, next) => {

        const { employeeId } = req.body;
        const now = new Date();
        try {

            const isOk = await validateNewPunch(employeeId, now)
            if (!isOk) {
                const error = new Error('You Have Already Punched');
                error.status = 400;
                return Promise.reject(error);
            }
            const doc = new Punch({ employeeId })
            const result = doc.save();
            res.json(result);

        }

      catch(error) {
          next(error)
      }

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