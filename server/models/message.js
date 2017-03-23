var mongoose = require('mongoose'),
    CommentSchema = mongoose.Schema({
        comment: String,
        user: String,
    }, {timestamps: {createdAt: 'created_at'}}),
    MessageSchema = mongoose.Schema({
        message: String,
        user: String,
        comments: [CommentSchema],
    }, {timestamps: {createdAt: 'created_at'}});
    mongoose.model('Message', MessageSchema);
