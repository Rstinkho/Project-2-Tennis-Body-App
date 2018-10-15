const pg = require('pg');
const url = require('url');

if( process.env.DATABASE_URL ){

  //we need to take apart the url so we can set the appropriate configs

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  //otherwise we are on the local network
  var configs = {
      user: 'taras',
      host: '127.0.0.1',
      database: 'tennis',
      port: 5432
  };
}

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack)
})

const userModel = require('./models/users')(pool);
const profileModel = require('./models/profiles')(pool);
const messageModel = require('./models/messages')(pool);



module.exports = {
    pool,
    userModel,
    profileModel,
    messageModel
};
