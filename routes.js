module.exports = (app, db) => {
    const users = require('./controlers/users')(db);
    app.get('/login', users.login)
    app.get('/logout', users.logout)
    app.post('/index', users.postLogin)
    app.get('/profile', users.editProfile)
    app.post('/profile', users.addProfile)
    app.get('/register', users.register)
    app.post('/register', users.regUser)
    app.get('/registerStep2', users.registerStepTwo)
    app.get('/message/:name', users.messageUser)
    app.post('/message/:name', users.sendMessage)
};
