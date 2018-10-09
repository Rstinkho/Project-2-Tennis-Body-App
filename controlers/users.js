const sha256 = require('js-sha256')
const CHOKCHIPS = "cookies with chips"
module.exports = (db) => {

    const login = (req, res) => {
        res.render('test');
    };

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
                            response.cookie('user_name', request.body.name)

                            //response.send(request.body.name + ' successfully login');
                            response.redirect('index');


                        }else{

                           response.send('wtf');

                        }
                    }
                }
            })

    }

    const indexLogin = (req, res) => {
        db.userModel.indexPage(req.body, (error, queryResult) => {
            res.render('index', {users: queryResult.rows});

        })

    }
  return {
    login,
    postLogin,
    indexLogin
  }
}