app.factory('wallFactory', function($http, $location) {
    var factory = {};
    var messages = [];
    factory.login = function(user) {
        $http.post('/login', user)
        .then(function(output) {
            if (output.data) {
                $location.url('/wall');
            }
        });
    };

    factory.getUser = function(cb) {
        $http.get('/getuser')
        .then(function(output) {
            if (output.data) {
                cb(output.data);
            }
        });
    };

    factory.checkUser = function() {
        $http.get('/checkuser')
        .then(function(output) {
            if (!output.data) {
                $location.url('/');
            }
        });
    };

    factory.logout = function(cb) {
        $http.get('/logout')
        .then(function(output) {
            $location.url('/');
            cb(output);
        });
    };

    factory.createMessage = function(message, cb) {
        $http.post('/createMessage', message)
        .then(cb);
    };

    factory.allMessages = function(cb) {
        $http.get('/allMessages')
        .then(function(output) {
            messages = output.data;
            cb(messages);
        });
    };

    factory.createComment = function(comment, cb) {
        $http.post('/createComment', comment)
        .then(cb);
    };

    return factory;
});
