const sha256 = require('js-sha256')
const CHOKCHIPS = "cookies with chips"
module.exports = (db) => {

    const login = (req, res) => {
        res.render('login');
    };

    const register = (request, response) => {
        response.render('register');
    }

    const postLogin = (request, response) => {

            db.userModel.userLogin(request.body.name, (error, queryResult) => {
                // 1. check for error
                // 2. if no error, check if results is empty?
                // 3. if not empty, match password
                if (error){
                    console.log('error!', error);
                    response.status(500).send('DIDNT WORKS!!');
                }else{

                    if (queryResult.rows.length < 1) {

                    } else {
                        const user = queryResult.rows[0];

                    //             var hashedValue = sha256(request.body.user_password);

                        if( user.password === request.body.password &&  user.name === request.body.name ){

                            let currentSessionCookie = sha256( user.id + CHOKCHIPS );
                            response.cookie('loggedin', currentSessionCookie);
                            response.cookie('user_id', user.id)

                            //response.send(request.body.name + ' successfully login');
                            response.redirect('index');


                        }else{

                           response.send('wtf');

                        }
                    }
                }
            })

    }

    const indexLogin = (request, response) => {
        db.userModel.indexPage(request.body, (error, queryResult) => {
            response.render('index', {users: queryResult.rows});

        })
 }
    const editProfile = (request, response) => {
        response.render('profile')
    }

    const addProfile = (request, response) => {
        const userProfile = {
            user_id: request.cookies.user_id,
            forehand: request.body.forehand,
            backhand: request.body.backhand,
            endurance: request.body.endurance,
            speed: request.body.speed,
            serve: request.body.serve,
            volley: request.body.volley
        }
    //    console.log(userProfile.backhand);
        db.userModel.profileAdd(userProfile, (error, queryResult) => {
            if (error) {
        response.sendStatus(500);
      } else {
        response.redirect('/index');
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
      } else {
        response.redirect('/login');
      }
        })
};




  return {
    login,
    postLogin,
    indexLogin,
    editProfile,
    addProfile,
    regUser,
    register
  }
}