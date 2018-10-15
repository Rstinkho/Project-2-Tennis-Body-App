module.exports = (db) => {

    const messageUser = (request, response) => {

        const info = {
            name: request.params.name
        }

        response.render('messagePage', {info: info})
    };


    const sendMessage = (request, response) => {

        var x = request.params.name;
        var y =  x.substr(1);
        console.log(y);

        const info = {
            id: request.cookies.user_id,
            name: y,
            message: request.body.message
        }

        db.messageModel.messageToUser(info, (error, queryResult) => {

            if (error) {
            response.sendStatus(500);

            } else {
            response.redirect('/index');
            }
        })
    };


    const messagePage = (request, response) => {
        const info = {
           id: request.cookies.user_id,
           name: request.cookies.user_name
        }

        db.messageModel.messageModel(info, (error, queryResult, queryResultTwo) => {

            const infoAfterQ = {
                one: queryResult,
                two: queryResultTwo
            };

            if (error) {
            response.sendStatus(500);

            } else {
            response.render('messages', {info: infoAfterQ});
            }
        })
    };

    return {
        messageUser,
        sendMessage,
        messagePage
    }
};