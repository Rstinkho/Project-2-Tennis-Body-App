module.exports = (db) => {

        const userLogin = (userInfo, callback) => {
            const sqlText = "SELECT * FROM users INNER JOIN profiles ON profiles.name = users.name WHERE users.name = $1;";
            const values = [userInfo];

            db.query(sqlText, values, (error, queryResult) => {

                if (error) {
                    console.log('error', error);
                    callback(error, null);
                } else {
                    callback(null, queryResult.rows[0]);
                }
            })
        }

    const indexPage = (queryResult, callback) => {
        const sqlText = "SELECT * FROM users WHERE id=$1;"
      //  console.log(queryResult.user_id)
        const values = [queryResult.user_id]
        db.query(sqlText, values, callback)
    }

    const profileAdd = (queryResult, callback) => {
        console.log(queryResult.user_id)
        const sqlText = "INSERT INTO profiles (name, forehand, backhand, endurance, speed, serve, volley) VALUES ($1, $2, $3, $4, $5, $6, $7);"
        const values = [queryResult.user_name, queryResult.forehand, queryResult.backhand, queryResult.endurance, queryResult.speed, queryResult.serve, queryResult.volley];

        db.query(sqlText, values, (error, queryResult) => {
      if (error) {
        console.log('error', error);
        callback(error, null);
      } else {
        callback(null, queryResult.rows[0]);
      }
    })
    }

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
    }









    return {
        userLogin,
        indexPage,
        profileAdd,
        postRegister
     }
}