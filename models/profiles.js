module.exports = (db) => {

    const profileEdit = (name, callback) => {

        const sqlText = "SELECT * FROM profiles WHERE name = $1;"
        const values = [name];

        db.query(sqlText, values, (error, queryResult) => {
            if (error) {
                    console.log('error', error);
                } else {
                    callback(null, queryResult.rows)
                }
        })
    };


    const profileSendEdit = (info, name, callback) => {

        const sqlText = "UPDATE profiles SET forehand = $1, backhand = $2, endurance = $3, serve = $4, speed = $5, volley = $6  WHERE name = $7;"
        const values = [info.forehand, info.backhand, info.endurance, info.serve, info.speed, info.volley, name];
        console.log("THE FIRST RESULT:", info)
        console.log("THE FIRST RESULT:", name)

        db.query(sqlText, values, (error, queryResult) => {
            console.log(queryResult)
            if (error) {
                console.log('error', error);
            } else {
                callback(null, queryResult.rows)
            }
        })
    };


    return {
        profileEdit,
        profileSendEdit
    }
};