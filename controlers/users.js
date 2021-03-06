const sha256 = require('js-sha256');
const CHOKCHIPS = "cookies with chips";

module.exports = (db) => {

    const test = (req, res) => {
        res.render('test')
    };

    const login = (req, res) => {
        res.render('login')
    };

    const logout = (req, res) => {
        res.clearCookie('user_id');
        res.clearCookie('loggedin');
        res.clearCookie('user_name');
        res.redirect('/login')
    };


    const register = (request, response) => {
        response.render('register');
    };

    const index = (request, response) => {
        db.userModel.userLogin(request.cookies.user_name, (error, queryResult, queryResultTwo) => {
                 if (error){
            console.log('error!', error);
            response.status(500).send('DIDNT WORKS!!');
            }

                    const user = queryResult[0];

                    const govno = {
                    one: queryResult,
                    two: queryResultTwo
                    };

                if (request.cookies.user_name === null || request.cookies.loggedin === null || request.cookies.user_id === null) {
                    response.send("Please log in to browse the app")
                } else {
                    response.render('index', {info: govno})
                }
        })
    }

    const postLogin = (request, response) => {

        db.userModel.userLogin(request.body.name, (error, queryResult, queryResultTwo) => {

            if (error){
            console.log('error!', error);
            response.status(500).send('DIDNT WORKS!!');
            }

                   const user = queryResult[0];


                    const govno = {
                    one: queryResult,
                    two: queryResultTwo
                    };

                        if( user.password === request.body.password &&  user.name === request.body.name ) {

                        let currentSessionCookie = sha256( user.id + CHOKCHIPS );

                        response.cookie('loggedin', currentSessionCookie);
                        response.cookie('user_id', user.id);
                        response.cookie('user_name', user.name);
                        response.render('index', { info: govno });

                        } else if (request.cookies.loggedin !== null) {
                        response.render('index', { info: govno })

                        } else {
                        response.send("wtf")
                        }
        })
    };


     const registerStepTwo = (request, response) => {
        response.render('registerStep2')
    };


    const editProfile = (request, response) => {
        response.render('profile')
    };


    const addProfile = (request, response) => {
        const userProfile = {
            user_name: request.cookies.user_name,
            forehand: request.body.forehand,
            backhand: request.body.backhand,
            endurance: request.body.endurance,
            speed: request.body.speed,
            serve: request.body.serve,
            volley: request.body.volley
        }

            db.userModel.profileAdd(userProfile, (error, queryResult, queryResultTwo) => {

                if (error) {
                response.sendStatus(500);

                } else {
                response.redirect('/login');
                }
            })
    };


    const regUser = (request, response) => {

        const users = {
        name: request.body.name,
        password: request.body.password
        }

        db.userModel.postRegister(users, (error, queryResult) => {

            if (error) {
            response.sendStatus(500);

            } else {
            response.cookie('user_name', request.body.name)
            response.redirect('/registerStep2');

            }
        })
    };


  return {
    login,
    logout,
    postLogin,
    editProfile,
    addProfile,
    regUser,
    register,
    registerStepTwo,
    index
  }
};