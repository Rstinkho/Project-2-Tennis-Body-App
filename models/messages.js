module.exports = (db) => {

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
        messageModel,
        messageModel
    }
};