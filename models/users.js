module.exports = (db) => {

    const userLogin = (name, callback) => {
        const sqlText = "SELECT * FROM users WHERE name=$1";
        const values = [name];
        db.query(sqlText, values, callback)
    }

    const indexPage = (queryResult, callback) => {
        const sqlText = "SELECT * FROM users;"
        db.query(sqlText, callback)
    }

    const profileAdd = (queryResult, callback) => {
        console.log(queryResult.user_id)
        const sqlText = "INSERT INTO profiles (user_id, forehand, backhand, endurance, speed, serve, volley) VALUES ($1, $2, $3, $4, $5, $6, $7); "
        const values = [queryResult.user_id, queryResult.forehand, queryResult.backhand, queryResult.endurance, queryResult.speed, queryResult.serve, queryResult.volley];

        db.query(sqlText, values, (error, queryResult) => {
      if (error) {
        console.log('error updating user bio:', error);
        callback(error, null);
      } else {
        callback(null, queryResult.rows[0]);
      }
    });
  };

    return {
        userLogin,
        indexPage,
        profileAdd
     }
}