var mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = {
    getUser: function(req, res) {
        if (req.session.user) {
            res.json(req.session.user);
        } else {
            res.json(null);
        }
    },

    checkUser: function(req, res) {
        if(req.session.user) {
            console.log(req.session.user);
            res.json(true);
        } else {
            console.log(req.session.user);
            res.json(false);
        }
    },

    login: function(req, res) {
        console.log('hello!');
        User.findOne(req.body, function(err, result) {
            var user;
            if (err) {
                console.log(err);
            } else if (!result) {
                user = new User(req.body);
                user.save();
            } else {
                user = result;
            }
            req.session.user = user;
            req.session.user.save();
            return res.json(user);
        });
    },

    logout: function(req, res) {
        req.session.destroy();
        res.json(null);
    }
};
