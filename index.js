const express = require('express');
var sha256 = require('js-sha256');

const cookieParser = require('cookie-parser')

const methodOverride = require('method-override');

const app = express();



app.use(cookieParser());

// Set up middleware
app.use(methodOverride('_method'));

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const db = require('./db');
const routes = require('./routes')

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

routes(app, db);



/*
app.get ('/index', (request, response) => {
    let sqlText = 'SELECT * FROM users;'

    pool.query(sqlText, (error, queryResult) => {
              if (error){
                console.log('error!', error);
                response.status(500).send('DIDNT WORKS!!');
              }else{

                const user = queryResult.rows[0];
              //  console.log(user);
                response.render('index', {users: queryResult.rows});
}
})
});
*/

const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));