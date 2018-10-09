module.exports = (app, db) => {
    const users = require('./controlers/users')(db);
    app.get('/login', users.login)
    app.post('/login', users.postLogin)
    app.get('/index', users.indexLogin)
};