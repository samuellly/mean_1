var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');
module.exports = function(app) {
    app.post('/login', function(req, res) {
        users.login(req, res);
    });

    app.get('/logout', function(req, res) {
        users.logout(req, res);
    });

    app.get('/getuser', function(req, res) {
        users.getUser(req, res);
    });

    app.get('/checkuser', function(req, res) {
        users.checkUser(req, res);
    });

    app.post('/createMessage', function(req, res) {
        messages.createMessage(req, res);
    });

    app.get('/allMessages', function(req, res) {
        messages.allMessages(req, res);
    });

    app.post('/createComment', function(req, res) {
        messages.createComment(req, res);
    });
};
