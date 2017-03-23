var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

module.exports = {
    createMessage: function(req, res) {
        var message = new Message(req.body);
        message.save();
        res.json(message);
    },
    allMessages: function(req, res) {
        Message.find({}, function(err, messages) {
            if (!err) {
                res.json(messages);
            }
        });
    },
    createComment: function(req, res) {
        Message.findById({_id: req.body.id}, function(err, message) {
            if (!err) {
                message.comments.push({comment: req.body.comment, user: req.body.user});
                message.save();
                res.json(message);
            }
        });
    }
};
