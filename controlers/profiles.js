module.exports = (db) => {

    const editProfile = (request, response) => {

        db.profileModel.profileEdit(request.cookies.user_name, (error, queryResult) => {

            const info = queryResult;

            if (error) {
                response.sendStatus(500);
            } else {
                response.render('profiles/editprofiles', {info: info})
            }
        })
    };


    const updateProfile = (request, response) => {

        db.profileModel.profileSendEdit(request.body, request.cookies.user_name, (error, queryResult) => {

            if (error) {
                response.sendStatus(500);
            } else {

              response.redirect('/index')
            }
        })
    }


    return {
        editProfile,
        updateProfile
    }
};