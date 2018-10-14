module.exports = (app, db) => {
    const users = require('./controlers/users')(db);
    const profiles = require('./controlers/profiles')(db);

    app.get('/register', users.register)
    app.post('/register', users.regUser)
    app.get('/registerStep2', users.registerStepTwo)

    app.get('/login', users.login)
    app.get('/logout', users.logout)

    app.get('/index', users.index)
    app.post('/index', users.postLogin)
    app.get('/index/messages', users.messagePage)

    app.get('/profile', users.editProfile)
    app.post('/profile', users.addProfile)


    app.get('/message/:name', users.messageUser)
    app.post('/message/:name', users.sendMessage)


//
    app.get('/profile/:name/edit', profiles.editProfile)
    app.put('/profile/:name', profiles.updateProfile)
};
