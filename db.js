const pg = require('pg');

const configs = {
  user: 'taras',
  host: '127.0.0.1',
  database: 'tennis',
  port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack)
})

const userModel = require('./models/users')(pool);
//const profilesModel = require('./models/profiles')(pool)

module.exports = {
    pool,
    userModel
}