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

    return {
        userLogin,
        indexPage

    }
}