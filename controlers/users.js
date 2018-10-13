const sha256 = require('js-sha256')
const CHOKCHIPS = "cookies with chips"
module.exports = (db) => {

    const login = (req, res) => {
        res.render('login');
    };

    const logout = (req, res) => {
        res.clearCookie('user_id');
        res.clearCookie('loggedin');
        res.clearCookie('user_name');
        res.redirect('/login')
    }

    const register = (request, response) => {
        response.render('register');
    }



    const postLogin = (request, response) => {

        db.userModel.userLogin(request.body.name, (error, queryResult, queryResultTwo) => {
            // 1. check for error
            // 2. if no error, check if results is empty?
            // 3. if not empty, match password
            if (error){
                console.log('error!', error);
                response.status(500).send('DIDNT WORKS!!');
            }

           // console.log(queryResult);
           // console.log(queryResultTwo)

                    const user = queryResult[0];

                    const govno = {
                        one: queryResult,
                        two: queryResultTwo
                    };

                   // console.log(govno)


                    // console.log(queryResultTwo);

                // var hashedValue = sha256(request.body.user_password);

                    if( user.password === request.body.password &&  user.name === request.body.name ){

                        let currentSessionCookie = sha256( user.id + CHOKCHIPS );
                        response.cookie('loggedin', currentSessionCookie);
                        response.cookie('user_id', user.id);
                        response.cookie('user_name', user.name);
                        response.render('index', { info: govno });
                        /*
                        response.cookie('loggedin' {
                            hash: currentSessionCookie
                            user_id: user.id
                        })
                        */
                    } else if (request.cookies.loggedin !== null) {
                        response.render('index', { info: govno });
                    } else {
                        response.send("wtf")
                    }

            // db.userModel.userLogin(info, (error, queryResult) => {
            //     if (error) {
            //     response.sendStatus(500);
            //   } else {

            //   }
            // })
        })
    }

     const registerStepTwo = (request, response) => {
        response.render('registerStep2')
    }


    const editProfile = (request, response) => {
        response.render('profile')
    }

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

    //    console.log(userProfile.backhand);
        db.userModel.profileAdd(userProfile, (error, queryResult, queryResultTwo) => {
            if (error) {
        response.sendStatus(500);
      } else {
        response.redirect('/login');
      }
    });
  };

    const regUser = (request, response) => {

        const users = {
        name: request.body.name,
        password: request.body.password
        }

        db.userModel.postRegister(users, (error, queryResult) => {
            if (error) {
        response.sendStatus(500);
            }   else {

        response.cookie('user_name', request.body.name)
        response.redirect('/registerStep2');

                }
        })


    };

    const messageUser = (request, response) => {
        console.log(request.body)
        const info = {
            name: request.params.name,

        }
        response.render('messagePage', {info: info})
    }

    const sendMessage = (request, response) => {


       var x = request.params.name;
       var y =  x.substr(1);
       console.log(y);

        const info = {
            id: request.cookies.user_id,
            name: y,
            message: request.body.message
        }

        console.log(info)

        db.userModel.messageToUser(info, (error, queryResult) => {
            if (error) {
        response.sendStatus(500);
            }   else {


        response.redirect('/login');

                }
        })
    }





  return {
    login,
    logout,
    postLogin,
    editProfile,
    addProfile,
    regUser,
    register,
    registerStepTwo,
    messageUser,
    sendMessage
  }
}