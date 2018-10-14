module.exports = (db) => {

    const userLogin = (name, callback) => {

            const sqlText = "SELECT * FROM users INNER JOIN profiles ON profiles.name = users.name WHERE users.name = $1;";
            const values = [name];

            db.query(sqlText, values, (error, queryResult) => {

                if (error) {
                    console.log('error', error);
                    callback(error, null);

                } else {

                    const sqlTextTwo = "SELECT * FROM users;"

                    db.query(sqlTextTwo, (error, queryResultTwo) => {

                    if (error) {
                        console.log('wtf')
                        console.log('error', error)
                        callback(error, null);

                    } else {

                        callback(null, queryResult.rows, queryResultTwo.rows)
                        }
                    })
                }
            })
    };


    const profileAdd = (queryResult, callback) => {

        var summ = (parseInt(queryResult.forehand) + parseInt(queryResult.backhand) + parseInt(queryResult.endurance) + parseInt(queryResult.speed) + parseInt(queryResult.serve) + parseInt(queryResult.volley));
        var regName = queryResult.user_name;

        const sqlText = "INSERT INTO profiles (name, forehand, backhand, endurance, speed, serve, volley) VALUES ($1, $2, $3, $4, $5, $6, $7);"
        const values = [queryResult.user_name, queryResult.forehand, queryResult.backhand, queryResult.endurance, queryResult.speed, queryResult.serve, queryResult.volley];

        db.query(sqlText, values, (error, queryResult) => {

            if (error) {

                console.log('error', error);
                callback(error, null);

            } else {

                const sqlTextTwo = "UPDATE profiles SET skilllevel = $1 WHERE name = $2;"

                var valuesTwo;

                if (summ <= 20) {
                    var valuesTwo = ['noob', regName];
                } else if (summ > 20) {
                    var valuesTwo = ['pro', regName];
                }


            db.query(sqlTextTwo, valuesTwo, (error, queryResultTwo) => {

                if (error) {

                    console.log('error', error);
                    callback(error, null);

                } else {

                    callback(null, queryResult.rows[0], queryResultTwo.rows);
                }
            })
            }
        })
    };


    const postRegister = (info, callback) => {

        const sqlText = "INSERT INTO users (name, password) VALUES ($1, $2);"
        const values = [info.name, info.password];

        db.query(sqlText, values, (error, queryResult) => {

            if (error) {
            console.log('error', error);
            callback(error, null);

            } else {

                callback(null, queryResult.rows[0]);
            }

        })
    };


    const messageToUser = (info, callback) => {

        const sqlText = "INSERT INTO messages (sender_id, receiver, message) Values ($1, $2, $3);"
        const values = [info.id, info.name, info.message];

        db.query(sqlText, values, (error, queryResult) => {

            if (error) {
            console.log('error', error);
            callback(error, null);

            } else {

            callback(null, queryResult.rows[0]);

            }
        })
    };


    const messageModel = (info, callback) => {

        const sqlText = "SELECT (message) FROM messages WHERE sender_id = $1;"
        const values = [info.id];

        db.query(sqlText, values, (error, queryResult) => {

        if (error) {
            console.log('error', error);
            callback(error, null);

            } else {

                const sqlTextTwo = "SELECT * FROM users INNER JOIN messages ON users.id = messages.sender_id WHERE messages.receiver = $1;"
                const valuesTwo = [info.name];

                db.query(sqlTextTwo, valuesTwo, (error, queryResultTwo) => {

                    if (error) {
                        console.log('error', error);
                        callback(error, null);

                        } else {

                        callback(null, queryResult.rows, queryResultTwo.rows);

                        }
                })
            }
        })
    };


    return {
        userLogin,
        profileAdd,
        postRegister,
        messageToUser,
        messageModel
     }
};