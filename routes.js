module.exports = (app, db) => {
    const users = require('./controlers/users')(db);
    const profiles = require('./controlers/profiles')(db);
    const messages = require('./controlers/messages')(db);

    app.get('/register', users.register)
    app.post('/register', users.regUser)
    app.get('/registerStep2', users.registerStepTwo)

    app.get('/login', users.login)
    app.get('/logout', users.logout)

    app.get('/index', users.index)
    app.post('/index', users.postLogin)


    app.get('/profile', users.editProfile)
    app.post('/profile', users.addProfile)

    app.get('/index/messages', messages.messagePage)
    app.get('/message/:name', messages.messageUser)
    app.post('/message/:name', messages.sendMessage)


//
    app.get('/profile/:name/edit', profiles.editProfile)
    app.put('/profile/:name', profiles.updateProfile)
};


